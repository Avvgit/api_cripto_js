const log = console.log;
const $datos = document.getElementById("data__container");
const $form = document.getElementById('input');
const currencies = document.getElementById('currency');
const $cryptoSelect = document.getElementById('crypto');
const result = document.getElementById("result")
const container = document.getElementById("container")


$form.addEventListener('submit', (e) => {
e.preventDefault();    
loadCurrencies()     
});

const loadCurrencies =  async() => {
try{  
    // apiUrl: `2d418d4a8407bf495bc64043db9d9dfd1a09195981a6861a65fe2f1710fab457`;
const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency.value}`); 
const info = await response.json(); 
let $name = info.Data[$cryptoSelect.value].CoinInfo.FullName;
let $price = "Cotización actual: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].PRICE; 
let $max = "Maximo Diario: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].HIGH24HOUR;
let $min = "Minimo Diario: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].LOW24HOUR;
let $lastUpdate = "Ultima actualización: "+ info.Data[$cryptoSelect.value].DISPLAY[currencies.value].LASTUPDATE;
let $variation = "Daily variation: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].CHANGEPCT24HOUR;

log(info.Data)
function showInfoPlease() {
    result.innerHTML = '';            
    const obtainedInfo = document.createElement('div');    
    obtainedInfo.classList.add('obtained_info');
    obtainedInfo.innerHTML = `
        <h4>${$name}:</h4>
        <p>${$price}</p>
        <p>${$max}</span></p>
        <p>${$min}</span></p>
        <p>${$variation}%</p>
        <p>${$lastUpdate}</p>
    `        
    result.appendChild(obtainedInfo);
}
showInfoPlease()  
} catch(error){
log("error");
}  
}
