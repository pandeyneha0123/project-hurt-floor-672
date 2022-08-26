var divs = document.getElementsByClassName("card");
      for(i in divs){
        divs[i].addEventListener("click", function(){
          window.location.href ="/pages/gearInfo.html"
        })
      }