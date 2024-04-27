// gsap.to("#box", {
//   x: 900,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
// });

// gsap.to("#box1", {
//   x: 900,
//   duration: 1,
//   delay: 2,
//   rotate: 360,

//   backgroundColor: "yellow",
// });

// gsap.to("#box2", {
//   x: 900,
//   duration: 1,
//   delay: 3,
//   rotate: 360,
//   scale: 2,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  delay: 1,
  duration: 0.5,
  opacity: 0,
});
tl.from("h4", {
  y: -30,
  delay: 1,
  duration: 0.5,
  opacity: 0,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  scale: 0.2,
  duration: 0.5,
  opacity: 0,
});
