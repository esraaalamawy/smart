var all=document.querySelectorAll("#add")
var box= document.getElementById("box")
var show= document.getElementById("show")
var price=document.getElementById("totalprice")
var order = document.getElementById("order")
var re= document.getElementById("reset")
var total=0
all.forEach( function(item){
    item.onclick=function(){
        box.innerHTML += item.getAttribute("name") + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"
        show.style.display="block"
        order.style.display="block"
        re.style.display="block"
        total +=+(item.getAttribute("price"))
        price.style.display="none"
    }
}
)

show.onclick=function(){
    price.style.display="block"
    price.innerHTML="total price is: " + total + " LE"
}

re.onclick= function(){
    total=0
    box.innerHTML =""
    price.style.display="none"
}