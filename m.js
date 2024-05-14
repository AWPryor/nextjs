// Assume this is the content of the file hosted at https://ex.am/m
console.log("Module loaded and executed!");

function updateDOM() {
  document.title = "Updated by Module";
}

// Call the function
updateDOM();
