// Use the const keyword to create three variables that store references to the input, button, and list components.
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Using addEventListener and an anonymous function, create a click event listener for the Add Chapter button..
button.addEventListener("click", () => {
  // Make sure the input is not blank with the if condition in the function block for adding a chapter, and if it is, do the following action:
  if (!(input.value == "")) {
    //  Create the li and button components. In order to add the text to the li element, I inserted a span element.
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    // Appending elements to li.
    listText.innerHTML = input.value;
    listItem.appendChild(listText);
    deleteButton.textContent = "❌";
    listItem.appendChild(deleteButton);

    // Append li to ul.
    list.appendChild(listItem);

    // Make a delete button event listener to remove the li from the listItem.
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    // Focus and clear input.
    input.focus();
    input.value = "";
  }
});
