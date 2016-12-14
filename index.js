const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

function technologic(batteryBatches) {
  var total = 0
  for (var x=0;x<batteryBatches.length;x++) {
      total += batteryBatches[i]
    }
  return total;
}

 const totalBatteries = function(batteryBatches, technologic) {
   technologic(batteryBatches);
 }

function wordLogic(lines) {
  hash = {}
  ary = []
  for (var x=0;x<lines.length;x++) {
    ary << line[x].split(" ").length
  }

  for (var x=0;x<ary.length;x++) {
    hash[x] = 0
     for (var y=0;y<ary.length;y++) {
       if (ary[x] == ary[y]) {
          hash[x] += 1
        }
     }
  }

  return hash

}

 const wordCountMap = function(wordLogic, monologueLines){
   wordLogic(monologueLines)
 }
