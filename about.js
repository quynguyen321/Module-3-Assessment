console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form has been submitted successfully");
}
let mouseOver = document.getElementById("img");

mouseOver.addEventListener("mouseover", function( event ) {
  alert("mouse over test!")
  
}, false);


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);