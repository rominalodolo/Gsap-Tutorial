let box = document.querySelector(".box");
let circle = document.querySelector(".circle");

// tweening 
gsap.to([box, circle], {
    x: 100,
    y: 30,
    
    duration: 1,
    ease: "bounce.out",
    delay: 0.5
})

