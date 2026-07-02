/*=========================================
        LOSTCOMPASS STUDIOS
            SCRIPT.JS
=========================================*/

/*========== MOBILE MENU ==========*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  menuBtn.innerHTML = navLinks.classList.contains("active") ?
    '<i class="fas fa-times"></i>' :
    '<i class="fas fa-bars"></i>';
});

/*========== CLOSE MENU AFTER CLICK ==========*/

document.querySelectorAll(".nav-links a").forEach(link => {
  
  link.addEventListener("click", () => {
    
    navLinks.classList.remove("active");
    
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
  });
  
});

/*========== NAVBAR ON SCROLL ==========*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 50) {
    
    header.style.background = "#0f1117";
    
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
    
  } else {
    
    header.style.background = "rgba(15,17,23,.95)";
    
    header.style.boxShadow = "none";
    
  }
  
});

/*========== SMOOTH SCROLL ==========*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      
      e.preventDefault();
      
      target.scrollIntoView({
        
        behavior: "smooth"
        
      });
      
    }
    
  });
  
});