document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  // contoh akun sederhana
  if(user === "admin" && pass === "123"){
    localStorage.setItem("login", "true");
    window.location.href = "index.html";
  }else{
    error.textContent = "Username atau password salah";
  }
});
