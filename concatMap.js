Array.prototype.concatMap = function(projectionFunction){
  return this.map(function(item){
    return projectionFunction(item);
  }).concatAll();
}

