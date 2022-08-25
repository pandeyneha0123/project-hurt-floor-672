let clicks = 0;
function dropdown(){
    clicks += 1
    console.log(clicks)
    if(clicks%2==1){
    document.getElementById("dropdown__content").style.display = "block"
    }else{
        document.getElementById("dropdown__content").style.display = "none" 
    }
}

function myFunction() {
    document.getElementById("dropdown-contentmedical").classList.toggle("show");
  }
