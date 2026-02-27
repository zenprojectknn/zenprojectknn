if(localStorage.getItem("login")!=="true"){
  location.href="login.html";
}
function logout(){
  localStorage.removeItem("login");
  location.href="login.html";
}
