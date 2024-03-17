const lis = document.getElementsByTagName('li');
//adding the edit button
for(let i = 0; i < lis.length; i++)
  {
    const btn = document.createElement('button');
const btnText = document.createTextNode('Edit');
btn.appendChild(btnText);
    btn.className = 'edit-btn';
    lis[i].appendChild(btn); 
  }
//adding description
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
  const paraText3 = document.createTextNode('brown color');
  para3.appendChild(paraText3);
  para3.style.fontStyle = 'italic';
  lis[3].appendChild(para3);
//creating the input element for fruit description
  const inp = document.createElement('input');
  const form = document.querySelector('form');
  const btn = document.querySelector("button");
  form.appendChild(inp);
  form.insertBefore(inp,btn);
  inp.id = 'description';
  inp.setAttribute('type', 'text');
  inp.setAttribute('placeholder', 'fruit description...');
//addind add functionality
  const fruits = document.querySelector('.fruits');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const descriptionToAdd = document.getElementById('description');
    if(fruitToAdd.value !== "" && descriptionToAdd.value !== "")
    {
        const newLi = document.createElement('li');
        const para = document.createElement('p');
        const paraText = document.createTextNode(descriptionToAdd.value);
        para.appendChild(paraText);
        para.style.fontStyle = 'italic';
        newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';
        newLi.appendChild(para);
        fruits.appendChild(newLi);
    }

  })
//adding delete functionality
  fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
      const fruitToDelete = event.target.parentElement
      fruits.removeChild(fruitToDelete)
    }
  })

  const filter = document.getElementById('filter');
  filter.addEventListener('keyup', function(event){
      const textEntered = event.target.value.toLowerCase();
      const fruitItems = document.getElementsByClassName('fruit');
      for(let i = 0; i < fruitItems.length; i++)
      {
          const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();
          const currentDescription = fruitItems[i].lastChild.textContent.toLowerCase();
          if(currentFruit.indexOf(textEntered) === -1 && currentDescription.indexOf(textEntered) === -1)
          {
              fruitItems[i].style.display = 'none';
          }
          else{
              fruitItems[i].style.display = 'flex';
          }
      }
  })