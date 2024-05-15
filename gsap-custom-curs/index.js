// var main = document.querySelector("#main");

// var cursor = document.querySelector("#cursor");

// main.addEventListener("mousemove", (dets) => {
//   gsap.to(cursor, {
//     x: dets.x,
//     y: dets.y,
//     duration: 1,
//     ease: "back.out(1.7)",
//   });
// });

// index.js

var main = document.querySelector("#main");

var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});
