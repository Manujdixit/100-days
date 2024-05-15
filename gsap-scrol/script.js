// gsap.from("#page #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });

// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page1 #body",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//     pin: true,
//   },
// });

// gsap.from("#page1 h1", {
//   opacity: 0,
//   x: 500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page1 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from("#page1 h2", {
//   opacity: 0,
//   x: -500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page1 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-117%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -400%",
    scrub: 2,
    pin: true,
  },
});

let blocksContainer = document.getElementById("blocks");
let animation = gsap.to(blocksContainer.querySelectorAll(".blocks"), {
  scale: 0.95,
});

let blocks = document.querySelector("#blocks .blocks");

blocks.addEventListener("mouseenter", () => animation.play());
blocks.addEventListener("mouseleave", () => animation.reverse());
