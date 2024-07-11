import {  getGitCode } from "./GetGitCode";

export async function CodeSequence( sequence:{url:string, tag:string}[]){

    
    return (await Promise.all(sequence.map( x => getGitCode(x.url))))
}


