// Add the Edit Button:
const lis = document.getElementsByTagName('li');
for(let i = 0; i < lis.length; i++)
  {
    const btn = document.createElement('button');
const btnText = document.createTextNode('Edit');
btn.appendChild(btnText);
    btn.className = 'edit-btn';
    lis[i].appendChild(btn);
    
    
  }

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
  const fruits = document.querySelector('.fruits')

  form.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    const newliText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newliText);
    newLi.className = 'fruit';
    const dltbtn = document.createElement('button');
    const dltbtnText = document.createTextNode('x');
    dltbtn.appendChild(dltbtnText);
    dltbtn.className = 'delete-btn';
    newLi.appendChild(dltbtn);
    const ebtn = document.createElement('button');
    const ebtnText = document.createTextNode('Edit');
    ebtn.appendChild(ebtnText);
    ebtn.className = 'edit-btn'
    newLi.appendChild(ebtn);
    fruits.appendChild(newLi);
  })

fruits.addEventListener('click', function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement
    fruits.removeChild(fruitToDelete)
  }
})
