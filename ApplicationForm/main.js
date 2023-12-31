
 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const inputpnumber = document.querySelector('#pnumber');
 const currClass = document.querySelector('#currClass');
 const grade = document.querySelector('#grade');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit', onSubmit);

 function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''|| pnumber === '' || currClass === '' || grade === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
 }