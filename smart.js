var all= document.querySelectorAll("#img")
var box= document.getElementById("box")
var show= document.getElementById("show")
var price=document.getElementById("totalprice")
var order = document.getElementById("order")
var total=0
all.forEach( function(item){
    item.onclick=function(){
        box.innerHTML += item.getAttribute("alt") + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"
        show.style.display="block"
        order.style.display="block"
        total +=+(item.getAttribute("price"))
        price.style.display="none"
    }
}
)

show.onclick=function(){
    price.style.display="block"
    price.innerHTML="total price is: " + total + " LE"
}