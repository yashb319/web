const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');

let data = [];

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    
    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*10000000)
    }
    addData(newUser);    
}

function addData(obj) {
    data.push(obj);
    updateDOM();
}

function updateDOM(providedData = data) {
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong> ${formatCurrency(item.money)}`;
        main.appendChild(element);
    });
}
function formatCurrency(number) {
    return '&#8377 ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
}

function getDoubleMoney() {
    data.forEach(item => {
        item.money=2*(item.money);
    });
    updateDOM();
}

function getMillionaries() {
    const million_data=[];
    data.forEach(item =>{
        if(item.money>1000000){
            million_data.push(item);
        }
    });
    updateDOM(million_data);
}

function getSort() {
    data=data.sort((a,b) => {
        return b.money-a.money;
    });
    updateDOM();
}

function getTotal(){
    let total=0;
    data.forEach(item => {
        total+=item.money;
    });
    const element=document.createElement('h3');
    element.innerHTML=`<strong>Total</strong> ${formatCurrency(total)}`;
    main.appendChild(element);
}
// addEventListener
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click',getDoubleMoney);
showMillionariesBtn.addEventListener('click',getMillionaries);
calculateBtn.addEventListener('click',getTotal);
sortBtn.addEventListener('click',getSort);