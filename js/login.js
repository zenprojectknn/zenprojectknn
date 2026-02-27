document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const err = document.getElementById("error");

  if(u === "admin" && p === "123"){
    localStorage.setItem("login","true");
    window.location.href = "index.html";
  }else{
    err.textContent = "Username atau password salah";
  }
});
