console.log(document.body.childNodes); // Получает все вложенные элементы body
console.log(document.body.lastChild); 
console.log(document.body.firstChild); 
console.log(document.body.firstChild); 

console.log(document.querySelector('#id').parentNode);
console.log(document.querySelector('#id').parentNode.parentNode);

console.log(document.querySelector('[data-somename="3"]').nextSibling);
console.log(document.querySelector('[data-somename="3"]').nextElementSibling);
console.log(document.querySelector('[data-somename="3"]').previousSibling);
console.log(document.querySelector('[data-somename="3"]').previousElementSibling);


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}