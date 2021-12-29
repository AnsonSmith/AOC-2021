// See https://aka.ms/new-console-template for more information

var readings = File.ReadLines(@"../input/input.txt").ToArray();
// var readings = new List<string> {
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
// };


// var prev = 0;
// var cnt = 0;
// foreach(var reading in readings) {
//   var readingInt = int.Parse(reading);
//   if ((readingInt > prev) && prev > 0){
//     cnt ++;
//   }
//   prev = readingInt;
// }

part1();
part2();

void part1()
{
    var (cnt, prev) = readings.Aggregate((cnt: 0, prev: 0), (acc, next) =>
    {
        var currVal = int.Parse(next);
        if ((currVal > acc.prev) && acc.prev > 0)
        {
            acc.cnt++;
        }
        acc.prev = currVal;
        return acc;
    });
    Console.WriteLine($"Part 1 - Number Larger: {cnt}");
}

void part2()
{
    var (cnt, prev, idx) = readings.Aggregate((cnt: 0, prev: 0, idx: 0), (acc, next) =>
    {
        if (acc.idx + 2 < readings.Count())
        {
            var currVal = int.Parse(next) + int.Parse(readings[acc.idx + 1]) + int.Parse(readings[acc.idx + 2]);
            if ((currVal > acc.prev) && acc.prev > 0)
            {
                acc.cnt++;
            }
            acc.prev = currVal;
            acc.idx++;

        }
        return acc;
    });
    Console.WriteLine($"Part 1 - Number Larger: {cnt}");

}
