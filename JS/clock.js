const clock = document.querySelector("h2#clock");

function getClock(){
    const dateNow = new Date();
   
    clock.innerText =`${dateNow.getHours()}시 ${dateNow.getMinutes()}분 ${dateNow.getSeconds()}초 `;
}
getClock();
setInterval(getClock,1000);