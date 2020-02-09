

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}




document.write(`
<strong>Функція 1:<strong> <b>${ucFirst("вася")}</b>, <b>${ucFirst("іван ")}</b></p>
`);