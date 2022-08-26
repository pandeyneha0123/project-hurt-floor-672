function setItemSize(){
    if(JSON.parse(localStorage.getItem("qty")) == "1"){
        var userCart= JSON.parse(localStorage.getItem("userCart"));
        userCart.qty = 1;
userCart.total_payable= 269;    
userCart.total_price= "&#8377;899"
userCart.discount= "&#8377;630"    
 
localStorage.setItem("userCart", JSON.stringify(userCart))
    }
    var size =JSON.parse(localStorage.getItem("size"))
    document.getElementById("size").textContent=`Size: ${size}`

    var userCart= JSON.parse(localStorage.getItem("userCart"));

    document.getElementById("order__cost__btn").innerHTML=`
    <!-- PLEASE DON'T DELETE THE EMPTY DIVS INSIDE THIS -->
<div></div>
    <button onclick="changeItemValue(this)" value="sub">-</button> <div></div> <h5 id="qty">${userCart.qty}</h4> <div></div> <button onclick="changeItemValue(this)" value="add">+</button>
<div></div>`;

document.getElementById("total_price").innerHTML =userCart.total_price;
document.getElementById("discount").innerHTML =userCart.discount;
document.getElementById("total_payable").innerHTML= "&#8377;"
document.getElementById("total_payable").innerHTML += userCart.total_payable

}
function changeItemValue(e){
var qty = JSON.parse(localStorage.getItem("qty"));
var total_price =document.getElementById("total_price").innerHTML;
var discount =document.getElementById("discount").innerHTML;
var total_payable =document.getElementById("total_payable").innerHTML;

console.log(total_price, discount, total_payable)
if(e.value=="sub"){
qty= Number(document.getElementById("qty").textContent)
qty--;
document.getElementById("qty").textContent = qty

if(qty==0){
closeCart()
}
}
else{
qty= Number(document.getElementById("qty").textContent)
qty++;
document.getElementById("qty").textContent = qty
}
localStorage.setItem("qty",JSON.stringify(qty))
total_price = "&#8377;" + 899 * qty
discount = "&#8377;" +  630 * qty
total_payable =(899 * qty) - (630 * qty)
document.getElementById("total_price").innerHTML =total_price
document.getElementById("discount").innerHTML =discount
document.getElementById("total_payable").innerHTML= "&#8377;"
document.getElementById("total_payable").innerHTML += total_payable

var userCart={}
userCart.qty= qty;
userCart.total_price = total_price;
userCart.discount = discount;
userCart.total_payable = total_payable;


localStorage.setItem("userCart", JSON.stringify(userCart))
}

function closeCart(){

localStorage.setItem("qty", JSON.stringify(0))
localStorage.setItem("size", JSON.stringify(""))

var userCart= JSON.parse(localStorage.getItem("userCart"));
userCart.qty = 0;
userCart.total_payable= 0;    
userCart.total_price= "&#8377;0"
userCart.discount= "&#8377;0"    

localStorage.setItem("userCart", JSON.stringify(userCart))

window.location.href='/pages/gearInfo.html';
}