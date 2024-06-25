const stringArray = ["hello world", "learning fullstack", "guvi is awesome"];

const convertToTitleCaps = arr => arr.map(str => 
    str.toLowerCase()
       .split(' ') .map(word => word.charAt(0).toUpperCase() + word.slice(1)) .join(' ')
);

const titleCapsArray = convertToTitleCaps(stringArray);
console.log("String array in title caps:", titleCapsArray);
