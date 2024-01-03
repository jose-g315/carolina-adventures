// Carolina Adventures
// Javascript file to randomly choose adventure.

// event lisetern for button in index.html
document.querySelector("button").addEventListener("click", () => {
    alert("Picking Adventure!");
    // setting a randomly to 0, 1, or 2.
    let a = Math.floor(Math.random() * 3);
    // if else statements to execute an action based on a.
    if (a === 0) {
        alert("Lets Go Hiking!");
        // redirecting to hiking.
        window.location.href = "hiking.html";
    }
    else if (a === 1) {
        alert("Lets Go Rafting");
        // redirecting to rafting.
        window.location.href = "rafting.html";
    }
    else if (a === 2) {
        alert("Lets Go Horseback Riding!")
        // redirecting to horseback riding.
        window.location.href = "horse-riding.html";
    }
   
  })