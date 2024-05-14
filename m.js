// Assume this is the content of the file hosted at https://ex.am/m
console.log("Module loaded and executed!");

// Place any immediate execution code here. For example:
document.body.innerHTML += '<h1>Module Executed</h1>';

// Or other operational scripts, such as sending data back, altering page content, etc.
fetch('https://yourdomain.com/log', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({message: 'Module executed'})
});

// If you want to perform some specific function automatically, define and call it:
function updateDOM() {
  document.title = "Updated by Module";
}

// Call the function
updateDOM();
