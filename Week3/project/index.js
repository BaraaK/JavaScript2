// Your code goes in here

//document.querySelector("#app").innerText = "Tip Calculator";

const bill = document.getElementById('bill');
const service = document.getElementById('services');
const numberOfPerson = document.getElementById('number-of-person');
const btn = document.querySelector('button');
const serviceOption = service[service.selectedIndex];
let tip = document.getElementById('total-tip');
let amount = document.getElementById('total-amount');
let resault = document.querySelectorAll('h2');
// If the length of the element's string is 0 then display helper message 
function validateForm() 
{
  if ( (bill.value.length == null || bill.value.length == 0) || (numberOfPerson.value.length == null || numberOfPerson.value.length == 0) 
        || (service.value == 0))
   { 
      return false; 
   }  	
   return true; 
 } 

btn.addEventListener('click' , event => {
    event.preventDefault();
    //alert(service.value)
    if (validateForm() === true) {
        resault.forEach(element => {
            element.style.display = "inline";
        });
        calculate();
    }
    else {
        alert("Please Fill in the fields")
    }   
    
} )
function calculate() {
    var tipAmount ,totalAmount ;
    if ( numberOfPerson.value > 1) {
        tipAmount = parseFloat(bill.value) * parseFloat(service.value);
        totalAmount = parseFloat((parseFloat(bill.value) + tipAmount) / parseInt(numberOfPerson.value));
        document.getElementById('tip-bill').innerHTML = `${tipAmount.toFixed(2)}`;
        document.getElementById('total-bill').innerHTML = `${totalAmount.toFixed(2)} for each`;
    }
    else {
        tipAmount = parseFloat(bill.value) * parseFloat(service.value);
        totalAmount = parseFloat((parseFloat(bill.value) + tipAmount));
        document.getElementById('tip-bill').innerHTML = `${tipAmount.toFixed(2)}`;
        document.getElementById('total-bill').innerHTML = `${totalAmount.toFixed(2)}`;
    }

}
