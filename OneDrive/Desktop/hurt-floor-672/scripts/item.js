var qty = JSON.parse(localStorage.getItem("qty"))
document.getElementById("item").innerHTML = qty


function checkCartValue() {
    if(JSON.parse(localStorage.getItem("qty"))> 0){
      document.getElementById("item").style.visibility= "visible";
    }
  }