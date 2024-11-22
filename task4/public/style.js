function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
      if (hr < 12) {
        ampm.innerHTML = "AM";  // AM
    } else  {
        ampm.innerHTML = "PM";  // Noon
    } 
    
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(displayTime)

function display(val){
  var  number=document.getElementById("screen");
    number.value += val;
}
function del(){
    var  number=document.getElementById("screen");
    number.value = number.value.slice(0,-1);   
}
function clearScreen(){
    var  number=document.getElementById("screen");
    number.value=""
}
function sinFun(){
    var  number=document.getElementById("screen");
    number.value=Math.sin(number.value)
}
function cosFun(){
    var  number=document.getElementById("screen");
    number.value=Math.cos(number.value)
}
function logFun(){
    var  number=document.getElementById("screen");
    number.value=Math.log(number.value)
}
function tanFun(){
    var  number=document.getElementById("screen");
    number.value=Math.tan(number.value)
}
function sqrtFun(){
    var  number=document.getElementById("screen");
    number.value=Math.sqrt(number.value)
}
function expFun(){
    var  number=document.getElementById("screen");
    number.value=Math.exp(number.value)
}
function powFun(){
    var  number=document.getElementById("screen");
    number.value=Math.pow(number.value,2)
}
function slove(){
    const display=document.getElementById('screen')
    let x=display.value
    let y = new Function('return ' + x)();
    display.value=y
}
function calculateFactorial() {
    const display = document.getElementById('screen');
    const number = parseInt(display.value);  
    display.value = factorial(number); 
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

