import { fetchPeople } from './fetch-people';
import { drawTable } from './draw-table';
import { enhanceButtons } from './enhance-buttons';


enhanceButtons();
fetchPeople(drawTable);

const dimensions = 100;
const julla = document.querySelector('#julla');
julla.style.display = 'block';
julla.style.backgroundColor = '#317ae2';
julla.style.width = `${dimensions}px`;
julla.style.height = `${dimensions}px`;
julla.style.borderRadius = '50%';
julla.style.transformOrigin = '50% 50%';

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
let start = new Date();

const animationTime = 1000;

const animate = (frame) => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(95,50,40,0,frame*2*Math.PI);
    ctx.stroke();
    julla.style.transform = `scale(${frame})`;
}

const bla = () => {
    window.requestAnimationFrame(() => {
        const timeDiff = new Date() - start;
        const timeMod = timeDiff % animationTime;

        animate(timeMod / animationTime);
        bla();
    });
}

// bla();