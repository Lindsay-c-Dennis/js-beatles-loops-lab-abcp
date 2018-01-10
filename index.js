function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i=0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  return array;
}
function johnLennonFacts(facts) {
  let trivia = [];
  var i =0;
  while (i<facts.length) {
    trivia.push(`${facts[i]}!!!`);
    i++;
  }
  return trivia;
}