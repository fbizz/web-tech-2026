let name = prompt("Enter your name:", "Guest");
if (name !== null) {
  console.log(name);
}

document.getElementById("result").textContent = "Hello, " + name;