// ========== NAV LINKS AND MAIN CONTAINERS CLASSLIST TOOGLE
const navLinks = document.querySelectorAll('.nav-links');
const mainContainers = document.querySelectorAll('.main-container')
const logo = document.querySelector('.logo');
const logoColors = ["<img src='/img/basic/logo_150x150 niebieski.png' alt='' width='150px' height='150px' class='img'>","<img src='/img/basic/logo_150x150 zielony.png' alt='' width='150px' height='150px' class='img'>","<img src='/img/basic/logo_150x150 zolty.png' alt='' width='150px' height='150px' class='img'>","<img src='/img/basic/logo_150x150 bialy.png' alt='' width='150px' height='150px' class='img'>"]
const foot = document.querySelector('.foot')

navLinks.forEach(function(navLink){

    navLink.addEventListener('click',function(e){

        navLinks.forEach(function(navLink){
            navLink.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        mainContainers.forEach(function(e){
        e.classList.add('invisible')
        })

        const category = e.currentTarget.dataset.id;
        const currentContainer = document.getElementById(category);
        currentContainer.classList.remove('invisible');

        if(category === 'graphic'){logo.innerHTML = logoColors[0]};
        if(category === 'painting'){logo.innerHTML = logoColors[1]};
        if(category === 'frontend'){logo.innerHTML = logoColors[2]};
        if(category === 'about'){logo.innerHTML = logoColors[3]};

        foot.classList.add('slide');
        setTimeout(function(){foot.classList.remove('slide')},550);
        foot.classList.remove('graphic','painting','about','frontend');
        foot.classList.add(category);
        })
})

logo.addEventListener('click', function(){
    console.log("That's my logo. Hope u like it");
})





// paintNar.addEventListener('click', function(event){

//     remove()

//     paint.classList.add('paint');
//     paint.classList.remove('active');
//     logo.innerHTML = "<img src='/img/basic/logo_150x150 zielony.png' alt='' width='150px' height='150px' class='img'>"
//     foot.classList.add('slide');
//     foot.classList.add('green');
//     setTimeout(function(){
//         foot.classList.remove('slide')
//     },1550)
//     draw.classList.remove('visible')
//     })
    



// frontendNar.addEventListener('click', function(event){

//     remove()

//     frontend.classList.add('fronte');
//     frontend.classList.remove('active');
//     logo.innerHTML = "<img src='/img/basic/logo_150x150 zolty.png' alt='' width='150px' height='150px' class='img'>"
//     foot.classList.add('slide');
//     foot.classList.add('yellow');
//     setTimeout(function(){
//         foot.classList.remove('slide')
//     },1550)
//     front.classList.remove('visible')
// })



// aboutNar.addEventListener('click', function(event){

//     remove()

//     about.classList.add('about');
//     about.classList.remove('active');
//     logo.innerHTML = "<img src='/img/basic/logo_150x150 bialy.png' alt='' width='150px' height='150px' class='img'>"
//     foot.classList.add('slide');
//     foot.classList.add('black');
//     setTimeout(function(){
//         foot.classList.remove('slide')
//     },1550) 
//     aboutMe.classList.remove('visible')
// })



// logo.addEventListener('click', function(){
//     console.log("That's my logo. Hope u like it");
// })

// hamburger.addEventListener('click', function(){
//     hamList.classList.toggle('visible-list')
    
// })
