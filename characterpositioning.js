function countLetters(string) {
  var result = {};
  var string = string.split(" ").join("");
  var index = 0;

  for (letters of string) {
   if (result[letters]) {
    result[letters].push(index);
        } else {
          result[letters] = [index];

    }
    index += 1;
  }


  return result;

}
console.log(countLetters("lighthouse in the house"));

