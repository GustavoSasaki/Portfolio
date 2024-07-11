export async function getGitCode(url: string) {
    const rawCode = await fetch(url).then(response => response.text())

    //removing before <start>
    const startRegex = /^\s*\/\/\s*\<start\>\s*$/gm
    let code = rawCode.split(startRegex)[1]

    code = removeTabs(code)

    //get between <tag>
    const regex = /^.*\/\/\s*\<\/?show\>.*$/gm
    const startLine = code.split(regex)[0].split(/\r\n|\r|\n/).length - 2

    code = code.split(regex)[1]
    code = removeFirstAndLastLine(code)
    if (!code)
        return undefined


    return {
        code,
        startLine: startLine,
        wholeCode: rawCode
    }
}

function removeFirstAndLastLine(str: string) {

    let lines = str.split('\n');

    lines.shift();
    lines.pop();

    return lines.join('\n');
}

function removeTabs(str: string) {
    const howMany = howManyTabs(str)
    if (howMany == 0)
        return str

    let lines = str.split('\n');

    const tabs = '\t'.repeat(howMany)
    const newLines = lines.map(l => l.replace(tabs, ""))

    return newLines.join('\n');
}

function howManyTabs(code: string) {
    const regex = /^\s*\/\/\s*\<show\>.*$/gm
    const showLine = code.match(regex)

    if (!showLine) return 0

    return showLine?.[0].split("\t").length - 1
}