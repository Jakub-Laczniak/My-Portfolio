var graph = document.querySelector('.graph-selector')
var paint = document.querySelector('.painting-selector')
var frontend = document.querySelector('.frontend-selector')
var about = document.querySelector('.about-selector');

var graphNar = document.querySelector('.graph-selector-narrow')
var paintNar = document.querySelector('.painting-selector-narrow')
var frontendNar = document.querySelector('.frontend-selector-narrow')
var aboutNar = document.querySelector('.about-selector-narrow');


var logo = document.querySelector('.logo');
var foot = document.querySelector('.foot')

var graphicDesing = document.querySelector('.graphic-design')
var aboutMe = document.querySelector('.aboutme')
var draw = document.querySelector('.drawing-painting')
var front = document.querySelector('.frontend-development')

var hamburger = document.querySelector('.hamburger');
var hamList = document.querySelector('.ham-list');

function remove() {
    graph.classList.add('active');
    paint.classList.add('active');
    frontend.classList.add('active');
    about.classList.add('active');

    paint.classList.remove('paint');
    frontend.classList.remove('fronte');
    about.classList.remove('about')
    graph.classList.remove('graph');

    foot.classList.remove('yellow')
    foot.classList.remove('green')
    foot.classList.remove('black')
    foot.classList.remove('blue')

    aboutMe.classList.add('visible')
    draw.classList.add('visible')
    front.classList.add('visible')
    aboutMe.classList.add('visible')
    graphicDesing.classList.add('visible')
}



graph.addEventListener('click', function(event){

remove()

    graph.classList.add('graph');
    graph.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 niebieski.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('blue');

    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    graphicDesing.classList.remove('visible')
})



paint.addEventListener('click', function(event){

    remove()

    paint.classList.add('paint');
    paint.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 zielony.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('green');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    draw.classList.remove('visible')
    })
    



frontend.addEventListener('click', function(event){

    remove()

    frontend.classList.add('fronte');
    frontend.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 zolty.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('yellow');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    front.classList.remove('visible')
})



about.addEventListener('click', function(event){

    remove()

    about.classList.add('about');
    about.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 bialy.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('black');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550) 
    aboutMe.classList.remove('visible')
})
graphNar.addEventListener('click', function(event){

remove()

    graph.classList.add('graph');
    graph.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 niebieski.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('blue');

    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    graphicDesing.classList.remove('visible')
})



paintNar.addEventListener('click', function(event){

    remove()

    paint.classList.add('paint');
    paint.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 zielony.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('green');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    draw.classList.remove('visible')
    })
    



frontendNar.addEventListener('click', function(event){

    remove()

    frontend.classList.add('fronte');
    frontend.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 zolty.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('yellow');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550)
    front.classList.remove('visible')
})



aboutNar.addEventListener('click', function(event){

    remove()

    about.classList.add('about');
    about.classList.remove('active');
    logo.innerHTML = "<img src='/img/basic/logo_150x150 bialy.png' alt='' width='150px' height='150px' class='img'>"
    foot.classList.add('slide');
    foot.classList.add('black');
    setTimeout(function(){
        foot.classList.remove('slide')
    },1550) 
    aboutMe.classList.remove('visible')
})



logo.addEventListener('click', function(){
    console.log("That's my logo. Hope u like it");
})

hamburger.addEventListener('click', function(){
    hamList.classList.toggle('visible-list')
    
})
