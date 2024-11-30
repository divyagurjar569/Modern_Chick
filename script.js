const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

var tl=gsap.timeline();

gsap.from("#part1",{
    y:"20",
    duration:1,
})

gsap.from("#part3",{
    y:"20",
    duration:1,
})

tl.from("#part2",{
    scale:0,
    y:"20",
    duration:1,
    delay:1,
})
tl.from("#smallcircle",{
    scale:0,
    y:"20",
    duration:1
})
tl.from("#text",{
    opacity:0,
    scale:0,
    y:"20",
    duration:2,
})
tl.from("#bigcircle",{
    opacity:0,
    scale:2,
    duration:2
})
tl.from("#bottom",{
    y:"20",
    duration:1,
    opacity:0
})
tl.from()