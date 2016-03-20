//Using reduce to find the max. value

function(){
  var ratings = [2,3,4,5,5,3,3,9,4]
  return ratings.reduce(function(acc, value){
    acc > value ? return acc : return value;
  })
}