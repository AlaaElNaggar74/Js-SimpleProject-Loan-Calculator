let firstinput=document.getElementById("firstinput");
let secinput=document.getElementById("secinput");
let thirinput=document.getElementById("thirinput");
let lasstreset=document.getElementById("lasstreset");


function calcu( ){

    let sum=( ( (+firstinput.value) * (+secinput.value) * .01 ) / (+thirinput.value) )
    let finalres= ( (+firstinput.value) / (+thirinput.value) + sum).toFixed(2);
    lasstreset.innerHTML=finalres;

}