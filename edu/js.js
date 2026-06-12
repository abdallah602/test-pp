
function login(e) {
    e.preventDefault();

    const savedUser = "basmala.2402474@su.edu.eg";
    const savedPass = "30702011901262";
    
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "basmala.2402474@su.edu.eg" && pass === "30702011901262") {
    window.location.href = "index2.html";
  } else {
    document.getElementById("error").style.display="block"
    document.getElementById("error").innerText =
      "Not found check password or username ";
  }
}
  