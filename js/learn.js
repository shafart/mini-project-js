
// Браузерные события

const btn = document.querySelector('button'),
      overlay = document.querySelector('.over;ay'),
      btns = document.querySelectorAll('button');

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second Click');
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.remove();
    // console.log('hover');
});

let i = 0; 
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log (e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement)
}); 

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target)
});

