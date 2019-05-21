/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/



function convertHTML(str) {
   const entities = {
      "&": "&amp;",
      "<" : "&lt;",
      ">": "&gt;",
      '"': 	"&quot;",
      "'": "&apos;"
   };
   for (let i = 0; i < str.length; i++) {
      if (entities.hasOwnProperty(str[i])) {
         str = str.replace(str[i], entities[str[i]]);
      }
   }
   return str;
}
 
console.log(convertHTML("Dolce & Gabbana"));