document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const u = username.value;
  const p = password.value;

  if(u === "admin" && p === "123"){
    localStorage.setItem("login","true");
    window.location.href = "index.html";
  }else{
    error.textContent = "Login gagal";
  }
});
