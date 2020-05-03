const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


function showError(input,message) {
  let formcontrol=input.parentElement;
  formcontrol.className='form-control error';
  console.log(message);
}

function showSuccess(input) {
  let formcontrol=input.parentElement;
  formcontrol.className='form-control succes';
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  if(username.value === ''){
    showError(username,"USERNAME IS REQUIRED");
  }
  else {
    showSuccess(username);
  }
});
