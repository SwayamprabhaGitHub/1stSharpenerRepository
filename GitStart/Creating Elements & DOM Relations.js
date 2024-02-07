const subheading = document.createElement('h3');
const subheadingText = document.createTextNode('Buy high quality organic fruits online');
subheading.appendChild(subheadingText);

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(subheading);

const mainheading = document.querySelector('h1');
mainheading.nextElementSibling.style.fontStyle = 'italic';

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
const fruits = document.querySelector('.fruits');
const secondDiv = divs[1];
secondDiv.insertBefore(para,fruits);
para.id = 'fruits-total';

