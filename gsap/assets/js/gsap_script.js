
// gsap.to('.box', {
//     x: 300,
//     duration: 2,
//     delay: 2,
//     rotate: 360,
//     borderRadius: "50%",
//     repeat: -1,
//     yoyo: true,
// })


// gsap.from(".box2", {
//     x: 300,
//     duration: 2,
//     delay: 1,
//     backgroundColor: 'red',

// })


// gsap.from('h1', {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     // stagger: 1,
//     stagger: -1,
//     repeat: -1,
//     yoyo: true,
//    scale:0.2,
// })


// var tl = gsap.timeline();

// tl.to(".page .box", {
//     x: 1200,
//     duration: 2,
//     scrollTrigger: ".page .box",
// })

// tl.from(".box2", {
//     x: 1200,
//     backgroundColor: 'red',
//     duration: 3,
// })

// tl.from('h1', {
//     opacity: 0,
//     duration: 1,
//     y: -30,
//     stagger: 0.3,
// });

// gsap.to('.one .box', {
//     x: 1000,
//     duration: 2,
// })

// gsap.to('.two .box', {
//     x: 1000,
//     duration: 2,
//     scrollTrigger: '.two .box',
//     delay: 1,
// })

// gsap.to('.three .box', {
//     x: 1000,
//     duration: 2,
//     scrollTrigger: {
//         trigger: '.three .box',
//         scroller: 'body',
//         markers: true,
//         start: "top 50%",
//         end: 'top 50%',
//         scrub: 2,
//         pin: true,
//     },
//     delay: 1,
// })


// gsap.to('.four .box', {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: '.three .box',
//         scroller: 'body',
//         markers: true,
//         start: "top 50%",
//         end: 'top 30%',
//         scrub: 2,
//         pin: true,
//     },
// })



// var path = "M 10 100 Q 600 100 1200 100";
// var finalpath = `M 10 100 Q 600 100 1200 100`;

// var page = document.querySelector('.three');


// page.addEventListener('mousemove', function (bakul) {
//     path = `M 10 100 Q 600 ${bakul.y} 1200 100`;
//     gsap.to("svg path", {
//         attr: { d: path },
//         duration: 0.5,
//         ease: "bounce.out"
//     })
// });

// page.addEventListener('mousemove', function () {
//     // console.log('leave')
// })

// var main = document.querySelector('#main');
// var cursor = document.querySelector('#cursor');
// var img = document.querySelector('.imgage');

// addEventListener('mousemove', function (bakul) {
//     gsap.to(cursor, {
//         x: bakul.x,
//         y: bakul.y,
//         duration: 1,
//     })
// });

// img.addEventListener("mousemove", function () {
//     gsap.to(cursor, {
//         scale: 4,
//     })
// });

// img.addEventListener("mouseleave", function () {
//     gsap.to(cursor, {
//         scale: 1,
//     })
// });


