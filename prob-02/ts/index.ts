import * as fs from 'fs';
var directions = fs.readFileSync('../input/input.txt').toString('utf-8').split('\n');
// var directions = [
//     "forward 5",
//     "down 5",
//     "forward 8",
//     "up 3",
//     "down 8",
//     "forward 2"
// ];


async function runPart1() {
    const { horz, depth } = directions.reduce((acc, curr) => {
        const currVal = curr.split(' ');
        const cmd = currVal[0].trim();
        const val = parseInt(currVal[1].trim());

        switch (cmd) {
            case "forward":
                acc.horz = acc.horz + val;
                break;
            case "up":
                acc.depth = acc.depth - val;
                break;
            case "down":
                acc.depth = acc.depth + val;
                break;

        }
        return acc;
    }, { horz: 0, depth: 0 });
    console.log(`Part 1: Final Vals: Horz - ${horz} Depth - ${depth}  Final - ${horz * depth}`);


}

async function runPart2() {
    const { horz, depth, aim } = directions.reduce((acc, curr) => {
        const currVal = curr.split(' ');
        const cmd = currVal[0].trim();
        const val = parseInt(currVal[1].trim());
        switch (cmd) {
            case "forward":
                acc.horz = acc.horz + val;
                acc.depth = acc.depth + (acc.aim * val);
                break;
            case "up":
                acc.aim = acc.aim - val;
                break;
            case "down":
                acc.aim = acc.aim + val;
                break;

        }
        return acc;
    }, { horz: 0, depth: 0, aim: 0});
    console.log(`Part 2: Final Vals: Horz - ${horz} Depth - ${depth}  Final - ${horz * depth}`);


}



runPart1()
    .then(() => {
        runPart2()
        .then(() => {
            process.exit();
        });
    })
    .catch(error => {
        throw error;
    });