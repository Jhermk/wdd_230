// try{
//     let options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long",
//         year : "numeric"
//     };

//     document.getElementById(
//         "currentdate2"
//     ).textContent = new Date().toLocaleDateString("eng-US",options);
//     document.getElementById(
//         "currentdate2"
//     ).textContent = new Date().toLocaleTimeString("eng-US",options);
// }
// catch(e){
//     alert("Error with codeor your browser does not support Locale");
// };


// last modified hours scripts
let lastModified = document.lastModified;
document.getElementById("currentdate2").textContent = lastModified;



