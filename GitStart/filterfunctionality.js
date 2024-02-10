const inp = document.createElement('input');
const form = document.querySelector('form');
const btn = document.querySelector("button");
form.appendChild(inp);
form.insertBefore(inp,btn);
inp.id = 'description';
inp.setAttribute('type', 'text');
inp.setAttribute('placeholder', 'fruit description...');


const lis = document.getElementsByTagName('li');
const para0 = document.createElement('p');
const paraText0 = document.createTextNode('yellow color');
para0.appendChild(paraText0);
para0.style.fontStyle = 'italic';
lis[0].appendChild(para0);

const para1 = document.createElement('p');
const paraText1 = document.createTextNode('red color');
para1.appendChild(paraText1);
para1.style.fontStyle = 'italic';
lis[1].appendChild(para1);

const para2 = document.createElement('p');
const paraText2 = document.createTextNode('orange color');
para2.appendChild(paraText2);
para2.style.fontStyle = 'italic';
lis[2].appendChild(para2);

const para3 = document.createElement('p');
const paraText3 = document.createTextNode('King of fruits');
para3.appendChild(paraText3);
para3.style.fontStyle = 'italic';
lis[3].appendChild(para3);


const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event){
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');
    for(let i = 0; i < fruitItems.length; i++)
    {
        const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();
        if(currentFruit.indexOf(textEntered) === -1)
        {
            fruitItems[i].style.display = 'none';
        }
        else{
            fruitItems[i].style.display = 'flex';
        }
    }
})


const description = document.getElementById('description'); // Changed the ID to 'description' instead of 'filter'
description.addEventListener('keyup', function(event){
    const textEntered = event.target.value.toLowerCase();
    const paraItems = document.querySelectorAll('li p'); // Select all <p> elements within <li> elements
    for(let i = 0; i < paraItems.length; i++)
    {
        const currentDescription = paraItems[i].textContent.toLowerCase();
        const fruitItem = paraItems[i].parentNode; // Get the parent <li> element
        if(currentDescription.indexOf(textEntered) === -1)
        {
            fruitItem.style.display = 'none'; // Hide the parent <li> if description doesn't match
        }
        else{
            fruitItem.style.display = 'flex'; // Show the parent <li> if description matches
        }
    }
})
