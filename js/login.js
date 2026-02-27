loginForm.addEventListener("submit",e=>{
  e.preventDefault();
  if(username.value==="admin" && password.value==="123"){
    localStorage.setItem("login","true");
    location.href="index.html";
  }else{
    error.textContent="Login gagal";
  }
});
