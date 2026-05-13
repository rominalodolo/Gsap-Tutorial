let box = document.querySelector(".box");
let circle = document.querySelector(".circle");
let triangle = document.querySelector(".triangle");

// tweening animation technique: it allows you to animate properties of an element over time, creating smooth transitions between different states. In this example, we are animating the x and y properties of the box and circle elements, moving them to new positions on the screen. The duration, easing, and delay options control how the animation behaves.
gsap.to([box, circle], {
    x: 100,
    y: 30,
    
    duration: 1,
    ease: "bounce.out",
    delay: 0.5
})


// xPercent it uses the width of the element to move it, so if you set xPercent: 100, it will move the element to the right by its own width. This is useful for responsive designs, as it will adapt to the size of the element.
gsap.to(triangle, {
    xPercent: 200,
    rotation: 360,
    duration: 13,
    ease: "bounce.out",
    delay: 0.5
})

gsap.to(".hexagon", {
    x: 100,
    y: 30,
    duration: 1,
    ease: "bounce.out",
    delay: 0.5
})