Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(innerData){return results.push(innerData)})
  });

  return results;
};
