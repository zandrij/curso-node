import fs from "fs";

let outputMessage = '';
const base = 4;
let outputHeader = `
==========================
    Tabla del ${ base }
==========================\n
`;

for( let i = 1; i <= 10; i++ ) {
    outputMessage += `${ base} x ${i} = ${base * i}\n`;
}

outputMessage = outputHeader + outputMessage;

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

console.log('file created')