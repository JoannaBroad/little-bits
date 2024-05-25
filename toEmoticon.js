// a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'
const toEmoticon = (input) => {
  switch (input) {
    case'shrug':
      return '|_{"}_|'
    case'smiley face':
      return ':)'
    case 'frowny face':
      return':('
    case 'winky face':
      return ';)'
    case 'heart':
      return '<3'
    default:
      return '|_(* ~ *)_|'
}}
console.log(toEmoticon('shrug'));
console.log(toEmoticon('smiley face'));
console.log(toEmoticon('frowny face'));
console.log(toEmoticon('winky face'));
console.log(toEmoticon('heart'));
console.log(toEmoticon('something else'));