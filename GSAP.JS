// gsap.from("#myElement", {
//     opacity:0, 
//     x: 70, 
//     duration:2,
//     stagger:0.5, 
//      scrollTrigger:{
//         trigger:"#myElement",
//         toggleActions:"play none none reset"
//      } // Easing function
// });


gsap.from(".html-icon", {
    opacity:0, 
    x: 70, 
    duration:2,
    stagger:1.4, 
     scrollTrigger:{
        trigger:".html-icon",
        toggleActions:"play pause resume none"
     } // Easing function
});

