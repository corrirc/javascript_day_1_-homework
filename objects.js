// var rating = {
//   critic: 94,
//   audience: 95
// }

var movie = {
  title: "It's a wonderful life",
  year: 1946,
  language: "Spanish",
  ratings: {
    critic: 94,
    audience: 95
  }
};

movie.filmCast = ["Alistair Kane", "Alan Russell"]

movie["cast"] = ["Alistair Kane", "Alan Russell"]
movie["language"] = "English"

console.log(movie.ratings.critic);

for ( var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}



var keys = Object.keys(movie);

for (var i = 0; i < keys.length; i++){
  var key = keys[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}

// console.log(keys);
