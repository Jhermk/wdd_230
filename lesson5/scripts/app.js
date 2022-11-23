// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// last modified date
let lastModified = document.lastModified;
document.getElementById("currentdate2").textContent = lastModified;

// nav bar js
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */


// Displaying events on top of the page
  let date = new Date(Date.UTC(2022, 11, 20, 7, 00));
  // Results below assume UTC timezone - your results may vary
  
  // Specify date and time format using "style" options (i.e. full, long, medium, short)
  console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));

  // Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"

  document.getElementById('events').textContent = ' Come join us for the chamber meet and greet '+ date;

 