import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, BatchGetCommand } from "@aws-sdk/lib-dynamodb";
require('dotenv').config();

const dynamoClient = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_BLOG ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_BLOG ?? '',
    },
});
const dynamoDocument = DynamoDBDocument.from(dynamoClient);
const TableName = 'blog'

//tested
export async function scan() {

    try {
        const response = await dynamoDocument.scan(
            {
                TableName
            })
        return response.Items
    } catch (error) {
        console.log(error)
    }
}

export async function getArticle({ path }: { path: string })  {

    try {
        const response = await dynamoDocument.query(
            {
                TableName,
                KeyConditionExpression: "pk = :pk AND sk = :sk",
                ExpressionAttributeValues: {
                    ":pk": "article|" + path,
                    ":sk": "data",
                }
            })

        const tags = await dynamoDocument.query(
            {
                TableName,
                KeyConditionExpression: "pk = :pk AND begins_with(sk,:sk)",
                ExpressionAttributeValues: {
                    ":pk": "article|" + path,
                    ":sk": "tag|",
                }
            })
        if (response?.Items?.[0]) {
            const tagList = tags?.Items?.map( item => item?.sk.replace('tag|',''))
            return { ...response.Items[0], tags: tagList } as unknown as ArticleDynamo
        }
        return response.Items as unknown as ArticleDynamo
    } catch (error) {
        console.log(error)
    }
}

//tested
export async function getArticlesOfTag({ tag }: { tag: string }) {

    try {
        const response = await dynamoDocument.query(
            {
                TableName,
                IndexName: "sk-index",
                KeyConditionExpression: "sk = :sk",
                ExpressionAttributeValues: {
                    ":sk": "tag|" + tag,
                }
            })

        const keys = response?.Items?.map(item => ({ pk: item.pk, sk: "data" }))
        const params = {
            RequestItems: {
                "blog": {
                    Keys: keys,
                },
            },
        };


        return (await dynamoClient.send(new BatchGetCommand(params)))?.Responses?.["blog"]
    } catch (error) {
        console.log(error)
    }
}

//tested
export async function getAllArticles() {

    try {
        //type is reserved word
        const response = await dynamoDocument.query(
            {
                TableName,
                IndexName: "entityType-index",
                KeyConditionExpression: "entityType = :entityType",
                ExpressionAttributeValues: {
                    ":entityType": "article",
                }
            })
        return response?.Items as unknown as ArticleDynamo[]

    } catch (error) {
        console.log(error)
    }
}

//tested
export async function getAllTags() : Promise<string[] | undefined>{

    try {
        const response = await dynamoDocument.query(
            {
                TableName,
                IndexName: "entityType-index",
                KeyConditionExpression: "entityType = :entityType",
                ExpressionAttributeValues: {
                    ":entityType": "tag",
                }
            })
        return response?.Items?.map( item => item?.sk.replace('tag|',''))

    } catch (error) {
        console.log(error)
    }
}

//tested
export async function addArticle(input: Omit<ArticleDynamo, "date" | "pk" | "sk" | "entityType">) {

    const newArticle: ArticleDynamo = {
        ...input,
        entityType: "article",
        pk: "article|" + input.path,
        sk: "data",
        date: (new Date()).toISOString()
    }

    try {
        await dynamoDocument.put(
            {
                TableName,
                Item: newArticle,
                ConditionExpression: 'attribute_not_exists(sk) AND attribute_not_exists(pk)'
            })
    } catch (error) {
        console.log(error)
    }
}

//tested
export async function deleteArticle({ path }: { path: string }) {

    try {

        const response = await dynamoDocument.query(
            {
                TableName,
                KeyConditionExpression: "pk = :pk",
                ExpressionAttributeValues: {
                    ":pk": "article|" + path,
                }
            })

        const deletes = response?.Items?.map(item =>
            dynamoDocument.delete(
                {
                    TableName,
                    Key: { pk: item.pk, sk: item.sk }
                })
        )
        if (deletes)
            Promise.all(deletes)


    } catch (error) {
    }
}

//tested
export async function addTag({ articlePath, tag }: { articlePath: string, tag: string }) {

    const newTag: TagDynamo = {
        pk: "article|" + articlePath,
        sk: "tag|" + tag,
        entityType: "tag"
    }

    try {
        await dynamoDocument.put(
            {
                TableName,
                Item: newTag,
                ConditionExpression: 'attribute_not_exists(sk) AND attribute_not_exists(pk)'
            })
    } catch (error) {
        console.log(error)
    }
}

//tested
export async function deleteTagOfArticle({ path, tag }: { path: string, tag: string }) {
    const newTag = {
        pk: "article|" + path,
        sk: "tag|" + tag
    }

    try {
        await dynamoDocument.delete(
            {
                TableName,
                Key: newTag
            })
    } catch (error) {
        console.log(error)
    }
}


export interface ArticleDynamo {
    title: string
    image: string
    description: string
    path: string
    pk: string //article|<path>
    sk: 'data'
    date: string
    entityType: 'article'
}


export interface TagDynamo {
    pk: string //article|<path>
    sk: string // tag|<tagName>
    entityType: 'tag'
}