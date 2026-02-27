if(localStorage.getItem("login") !== "true"){
  window.location.href = "login.html";
}

function logout(){
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
