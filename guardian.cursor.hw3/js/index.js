//function 3

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}


function getRandomInt(max) {
  return Math.floor(Math.random(0) * Math.floor(max));
}

document.writeln( getRandomInt(9) );

document.writeln(`<b>Функція 3:</b>`);
document.writeln( ucFirst("вася "), ucFirst("влад  "), ucFirst("іван") );