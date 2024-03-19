function handleFormSubmit(event){
    event.preventDefault();
    //fetching the data
    const amt = event.target.amount.value;
    const dscptn = event.target.describe.value;
    const ctgry = event.target.category.value;
    
    //storing in the local storage
    let Obj = {Amount: amt, Description: dscptn, Category: ctgry};
    let Obj_Serielized = JSON.stringify(Obj);
    localStorage.setItem(Obj.Category, Obj_Serielized);

    //creating list
    const list = document.querySelector('.storingData');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(`${amt}-${dscptn}-${ctgry}`);
    newLi.appendChild(newLiText);
    const dltbtn = document.createElement('button');
    const dltbtnText = document.createTextNode('Delete');
    dltbtn.appendChild(dltbtnText);
    dltbtn.className = 'dlt-button';
    newLi.appendChild(dltbtn);
    dltbtn.onclick = (event) => {
        if(event.target.classList.contains('dlt-button'))
        {
            localStorage.removeItem(Obj.Category);
            list.removeChild(event.target.parentElement);
        }
    }
    const edtbtn = document.createElement('button');
    const edtbtnText = document.createTextNode('Edit');
    edtbtn.appendChild(edtbtnText);
    edtbtn.className = 'edt-button';
    newLi.appendChild(edtbtn);
    edtbtn.onclick = (event) => {
        if(event.target.classList.contains('edt-button'))
        {
            document.getElementById('amount').value = Obj.Amount;
            document.getElementById('describe').value = Obj.Description;
            document.getElementById('category').value = Obj.Category;

            localStorage.removeItem(Obj.Category);
            list.removeChild(event.target.parentElement);
        }
    }
    console.log(newLi);
    list.appendChild(newLi);

    //empty input fields after form submission
    event.target.amount.value = '';
    event.target.describe.value = '';
    event.target.category.value = '';
    
}

