if(!localStorage.getItem("login")){
  window.location.href="login.html";
}

function logout(){
  localStorage.removeItem("login");
  window.location.href="login.html";
}
