
// menu code start here
var menubar = document.querySelector('.bar i');
var menucorss = document.querySelector('.cross i');

var tl = gsap.timeline();

tl.to(".menu", {
    right: 0,
    duration: 0.8,
})

tl.to('.menu ul li', {
    x: -100,
    duration: 0.5,
    stagger: 0.6,
})

tl.to('.cross i', {
    rotate: 360,
})


tl.pause();


menubar.addEventListener("click", function () {
    tl.play();
})

menucorss.addEventListener("click", function () {
    tl.reverse();
})


//menu code end here



// text animation start here
// function textanimaton() {
//     console.log(texth2);
// }
// textanimaton()


function textanimation() {
    var texth2 = document.querySelector('.text h2');
    var textcontent = texth2.textContent;
    var textspilt = textcontent.split('');

    var blankvalue = '';

    var halfvalue = textspilt.length / 2;


    textspilt.forEach(function (allvalue, index) {
        if (index < halfvalue) {
            blankvalue += `<span class='a'>${allvalue}</span>`;
        } else {
            blankvalue += `<span class='b'>${allvalue}</span>`;
        }
    });

    var texth = document.querySelector('.text h2');

    texth.innerHTML = blankvalue;
}

textanimation();

var textitme = gsap.timeline();

gsap.from('.text h2 .a', {
    y: 100,
    delay: 1,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});

gsap.from('.text h2 .b', {
    y: 100,
    delay: 1,
    opacity: 0,
    duration: 1,
    stagger: -0.3,
});




// gsap.from('.text h2 span', {
//     y: 100,
//     delay: 0.5,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
// });
//

window.addEventListener('wheel', function (value) {
    if (value.deltaY > 0) {
        gsap.to(".item", {
            transform: "translateX(-200%)",
            repeat: -1,
            duration: 3,
            ease: "none",
        });
    } else {
        gsap.to(".item", {
            transform: "translateX(0%)",
            repeat: -1,
            duration: 3,
            ease: "none",
        });
    }

});