import * as fs from 'fs';
var readings = fs.readFileSync('../input/input.txt').toString('utf-8').split('\n');
// var readings = [
//     "199",
//     "200",
//     "208",
//     "210",
//     "200",
//     "207",
//     "240",
//     "269",
//     "260",
//     "263"
// ];


async function runpart1() {
    const { cnt, ...other }  = readings.reduce( (acc, curr) => {
        let currVal = parseInt(curr);
        if (acc.prev != 0 && (currVal > acc.prev)) {
            acc.cnt ++
        }
        acc.prev = currVal;
        return acc;
    }, {cnt: 0, prev: 0});
    console.log("Count for Part 1 is: " + cnt);
}

async function runPart2() {
    const { cnt2, ...other2 }  = readings.reduce( (acc, curr, currIndex) => {
        //make sure we don't exceed array length
        if (currIndex + 2 < readings.length) {
            let currVal = parseInt(curr) + parseInt(readings[currIndex + 1]) + parseInt(readings[currIndex + 2]);
            if (acc.prev != 0 && (currVal > acc.prev)) {
                acc.cnt2 ++
            }
            acc.prev = currVal;
        }
        return acc;
    }, {cnt2: 0, prev: 0});

    console.log("Count for Part 2 is: " + cnt2);

}



runpart1()
.then(() => {
    runPart2()
    .then(() => {
        process.exit;
    })
})
.catch(error => {
    throw error;
});