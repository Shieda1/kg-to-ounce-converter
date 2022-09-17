// https://www.omnicalculator.com/conversion/kg-to-ounce-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ounceRadio = document.getElementById('ounceRadio');
const kgRadio = document.getElementById('kgRadio');

let ounce;
let kg = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ounceRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

kgRadio.addEventListener('click', function() {
  variable.textContent = 'Ounce';
  ounce = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ounceRadio.checked)
    result.textContent = `Ounce = ${computeounce().toFixed(5)}`;

  else if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;
})

// calculation

function computeounce() {
  return Number(kg.value) * 35.274;
}

function computekg() {
  return Number(ounce.value) / 35.274;
}