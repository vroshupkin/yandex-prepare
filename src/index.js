import helloParcelForBackend from './streams/first'
import { ReadLine as readline } from 'readline';

const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});

function solution(a, b){
    console.log(a, b)
    
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const res = solution()

    process.stdout.write(result.toString());
});


