const clock = document.getElementById('clock');



// setInterval The setInterval() method continues calling the function until clearInterval() is called, 
// or the window is closed.

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000)