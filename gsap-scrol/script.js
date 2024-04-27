gsap.from("#page #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});

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

gsap.from("#page2 #box", {
  scale: 0,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

gsap.from("#page1 h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

gsap.from("#page1 h2", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
