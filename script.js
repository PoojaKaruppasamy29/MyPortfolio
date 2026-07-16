// ==========================
// MOBILE MENU
// ==========================

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {

    nav.classList.toggle("active");

    navLinks.forEach((link, index) => {

        if (link.style.animation) {

            link.style.animation = "";

        } else {

            link.style.animation =
                `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

        }

    });

    burger.classList.toggle("toggle");

});



// ==========================
// NAV LINK ANIMATION
// ==========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes navLinkFade{

    from{

        opacity:0;
        transform:translateX(50px);

    }

    to{

        opacity:1;
        transform:translateX(0);

    }

}

`;

document.head.appendChild(style);




// ==========================
// CLOSE MENU WHEN CLICKING
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});




// ==========================
// STICKY NAVBAR
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#020617";

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.background = "#111827";

        header.style.boxShadow = "none";

    }

});




// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// ==========================
// ACTIVE MENU
// ==========================

const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});




// ==========================
// TYPING EFFECT
// ==========================

const role = document.querySelector(".hero-text h2");

const text = "Full Stack Developer";

let i = 0;

function typing(){

    if(i < text.length){

        role.textContent += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

role.textContent = "";

typing();




// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});