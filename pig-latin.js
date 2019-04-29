/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
      let strArr = str.split("");
      const vowels = ["a", "e", "i", "o", "u"];
      let consonants = [];
      if (vowels.indexOf(strArr[0]) != -1) {
            return strArr.join("") + "way";
      }
      for (let i = 0; i < vowels.length; i++) {
            if (vowels.indexOf(strArr[i]) == -1) {
                  consonants.push(strArr[i]);
            } else {
                  break;
            }
      }
      for (let i = 0; i < consonants.length; i++) {
            strArr.shift();
      }
      let final = strArr.concat(consonants).join("");
      return final + "ay";
}

console.log(translatePigLatin("california"));