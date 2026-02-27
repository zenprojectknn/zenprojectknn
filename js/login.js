document.getElementById("loginForm").addEventListener("submit",e=>{
  e.preventDefault();

  const u=username.value;
  const p=password.value;

  if(u==="admin" && p==="123"){
    localStorage.setItem("login","1");
    location.href="index.html";
  }else{
    document.getElementById("error").innerText="Login gagal";
  }
});
