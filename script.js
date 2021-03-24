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

        articles.forEach(function(e){
            e.classList.add('visibility');
        })
        backBtn.classList.add('visibility');
        })
})

logo.addEventListener('click', function(){
    console.log("That's my logo. Hope u like it");
})



// ========== ARTICLES CURTAIN TOGGLE AND BACK BTN FUNCIONALITY

const backBtn = document.querySelector('.back-btn');
const articles = document.querySelectorAll('.articles');
const projectElements = document.querySelectorAll('.project-element');

projectElements.forEach(function(element){
    element.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const subArticle = document.getElementById(category)
        subArticle.classList.remove('visibility')
        window.scrollTo(0, 0);
        backBtn.classList.remove('visibility')
    })
})


backBtn.addEventListener('click',function(){
    window.scrollTo(0, 0);
    articles.forEach(function(e){
        e.classList.add('visibility');
    })
    backBtn.classList.add('visibility');
})


window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight>400){
      backBtn.classList.add('fixed');
  } else {
      backBtn.classList.remove('fixed');
  }
});

    const hamburger = document.querySelector('.hamburger')
    const hamList = document.querySelector('.wide-screen-list')

    hamburger.addEventListener('click', function(){
    hamList.classList.toggle('visible-list');
    articles.forEach(function(e){
        e.classList.toggle('move-article');
    })
    backBtn.classList.toggle('move-back-btn')
 })

 const wideList = document.querySelector('.wide-screen-list');
 const narrowList = document.querySelector('.ham-list');
