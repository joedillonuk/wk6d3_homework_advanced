const IsogramFinder = function (word) {
  this.phrase = word.split('');

}

IsogramFinder.prototype.isIsogram = function () {
  array = this.toLowerCase();
  const lowCaseArray = array.filter((item) => {
    if( item.toUpperCase() != item.toLowerCase() ){
      return item;
    }
  })
  let uniqueArray = [...new Set(lowCaseArray)]
  if(uniqueArray.length === lowCaseArray.length){
    return true
  } else {
    return false
  }
}

IsogramFinder.prototype.toLowerCase = function () {
  return result = this.phrase.map((word) => {
    return word.toLowerCase();
  })
};


module.exports = IsogramFinder;
