// Displaying events on top of the page
let date = new Date(Date.UTC(2022, 11, 20, 7, 00));
// Results below assume UTC timezone - your results may vary

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));

// Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"

document.getElementById('events').textContent = ' Come join us for the chamber meet and greet '+ date;
