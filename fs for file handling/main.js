import fs from "fs/promises";

const create = await fs.writeFile("one.txt", "Hello World!");
// console.log("Creating", create);

const read = await fs.readFile("one.txt");
console.log("Reading Text File:", read.toString());

const appendText = await fs.appendFile("one.txt", "\n This new data append");
