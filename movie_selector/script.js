const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect= document.getElementById('movie');


populateUI();


let ticketPrice= +movieSelect.value;

function updatecount() {
  const selectedSeats=document.querySelectorAll('.row .seat.selected');

  const seatsIndex=[...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat)
  });

  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

  const selectedSeatsCount=selectedSeats.length;
  count.innerText=selectedSeatsCount;
  total.innerText=selectedSeatsCount*ticketPrice;
}

container.addEventListener('click',e =>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');
  }
  updatecount();
});


movieSelect.addEventListener('change',e=>{
  ticketPrice= +e.target.value;
  localStorage.setItem('movieIndex',e.target.selectedIndex);
  localStorage.setItem('moviePrice',e.target.value);
  updatecount();
})


function populateUI() {
    const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats!==null && selectedSeats.length>0){
      seats.forEach((seat, i) => {
        if(selectedSeats.indexOf(i) > -1){
          seat.classList.add('selected');
        }
      });
    }
    const movieIndex=localStorage.getItem('movieIndex');
    if(movieIndex!==null){
      movieSelect.selectedIndex=movieIndex;
    }
}

updatecount();
