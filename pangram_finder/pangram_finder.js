const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
array = this.toLowerCase();
const lowCaseArray = array.filter((item) => {
  if( item.toUpperCase() != item.toLowerCase() ){
    return item;
  }
})
let uniqueArray = [...new Set(lowCaseArray)]
if(uniqueArray.length === 26){
  return true
} else {
  return false
}
}

PangramFinder.prototype.toLowerCase = function () {
  return result = this.phrase.map((word) => {
    return word.toLowerCase();
  })
};

module.exports = PangramFinder;
