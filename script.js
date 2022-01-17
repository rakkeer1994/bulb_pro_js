







let status = document.getElementById("status");


function onoff_btn(){
    
for(let x=1; x<6; x++){
let bulb = document.getElementById("lightid".concat(x));
if(bulb.src.match('bulb_on')){
    bulb.src="./bulb_off.jpg";
    status.innerHTML = "Now bulb is OFF !!!";
    status.style.color = "blue";
    console.log("hiii");
}
else{
    bulb.src="./bulb_on.jpg";
    status.innerHTML = "Now bulb is ON !!!";
}
}


}