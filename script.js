/*====================================
        NAVBAR SCROLL EFFECT
====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#090909";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


/*====================================
        SCROLL TO TOP BUTTON
====================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.transition = ".4s";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


/*====================================
        FADE ANIMATION
====================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

const items=document.querySelectorAll(".category-card,.product,.service");

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(70px)";
item.style.transition=".8s";

observer.observe(item);

});


/*====================================
        BUTTON HOVER
====================================*/

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


/*====================================
        PRODUCT HOVER
====================================*/

const products=document.querySelectorAll(".product");

products.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`rotateX(${-(y-rect.height/2)/25}deg)
 rotateY(${(x-rect.width/2)/25}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});


/*====================================
        LOADING EFFECT
====================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";
document.body.style.opacity="1";

},200);

});


/*====================================
        NEWSLETTER
====================================*/

const subscribe=document.querySelector(".newsletter button");

if(subscribe){

subscribe.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

if(email===""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing!");

document.querySelector(".newsletter input").value="";

}

});

}