// See https://aka.ms/new-console-template for more information

var directions = File.ReadLines(@"../input/input.txt").ToArray();
// var directions = new List<string> {
//     "forward 5",
//     "down 5",
//     "forward 8",
//     "up 3",
//     "down 8",
//     "forward 2"
// };


var horz = 0;
var depth = 0;
foreach(var direction in directions) {
    var line = direction.Split(' ');
    //0 should be cmd, 1 should be value
    var cmd = line[0].Trim();
    var val = int.Parse(line[1].Trim());
    
    switch (cmd) {
        case "forward": {
            horz = horz + val;
            break;
        }
        case "up": {
            depth = depth - val;
            break;
        }
        case "down": {
            depth = depth + val;
            break;
        }

    }
}
    Console.WriteLine($" Final Vals: Horz - {horz} Depth - {depth}  Final - {horz * depth}");

