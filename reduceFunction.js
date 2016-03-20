//Using reduce to find the max. value

function(){
  var ratings = [2,3,4,5,5,3,3,9,4]
  return ratings.reduce(function(acc, value){
    acc > value ? return acc : return value;
  })
}

function() {
  var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

  // You should return an array containing only the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.
    reduce(function(acc,curr) {
    if (acc.width * acc.height > curr.width * curr.height) {
      return acc;
    }
    else {
      return curr;
    }
    }).
    map(function(boxart) {
    return boxart.url;
    });
}


//building objects with reduce
var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

videos.reduce(function(accumulatedMap, video) {
    var obj = {};
    obj[video.id] = video.title;

    // Object.assign() takes all of the enumerable properties from
    // the object listed in its second argument (obj) and assigns them
    // to the object listed in its first argument (accumulatedMap).
    return Object.assign(accumulatedMap, obj);
    },
    {});
}