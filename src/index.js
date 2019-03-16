module.exports = function getLoveTrianglesCount(preferences = []){
  let count = 0;
  for(let i = 0, len = preferences.length; i < len; i++){
    if ((preferences[preferences[preferences[i]-1]-1]) == i + 1){
      count++;
    }
  }
  return (count-count%3)/3;
}
