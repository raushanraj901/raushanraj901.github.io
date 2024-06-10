
const boxes = document.querySelectorAll('.project-main');
window.addEventListener('scroll' , checkBoxes);
checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxeses = document.querySelectorAll('.cont-box-1');
window.addEventListener('scroll' , checkBoxeses);
checkBoxeses()

function checkBoxeses(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxeses);
    boxeses.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

const boxese = document.querySelectorAll('#skills1>#skills-container1>div');
window.addEventListener('scroll' , checkBoxese);
checkBoxese()

function checkBoxese(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxese);
    boxese.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const box = document.querySelectorAll('.skill-2');
window.addEventListener('scroll' , checkBox);
checkBox()

function checkBox(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(box);
    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxes_1 = document.querySelectorAll('.abt-img-c');
window.addEventListener('scroll' , check);
check()
function check(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes_1);
    boxes_1.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxes_2 = document.querySelectorAll('.skills-box');
window.addEventListener('scroll' , check4);
check4()
function check4(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes_2);
    boxes_2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}






$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 100) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Back-End Developer", "Java Person"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Back-End Developer", "Java Person"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });

  function show(){
    window.location.href="mailto:raushanraj901@gmail.com?subject=regarding hiring";
  }
  let abt_img=document.querySelector(".abt-img-1").addEventListener("click",show)

  function show1(){
    
    window.open('https://github.com/raushanraj901', '_blank');
  }

  let abt_img_1=document.querySelector(".abt-img-2").addEventListener("click",show1)

  function show2(){

    window.open("https://www.linkedin.com/in/raushan-raj-409892155/", "_blank");
    
  }

  let abt_img_2=document.querySelector(".abt-img-3").addEventListener("click",show2)

  function show3(){
    
    window.open('https://x.com/ER_R_R', '_blank');
  }


  let abt_img_3=document.querySelector(".abt-img-4").addEventListener("click",show3)


  // conatct section 


  function contshow(){
    window.location.href="mailto:raushanraj901@gmail.com?subject=regarding hiring";
  }
  let my_cont=document.querySelector(".cont-box-b").addEventListener("click",contshow)

  function contshow1(){
    window.open('https://github.com/raushanraj901', '_blank');
  }

  let my_cont_1=document.querySelector(".cont-box-d").addEventListener("click",contshow1)

  function contshow2(){

    window.open("https://www.linkedin.com/in/raushan-raj-409892155/", "_blank");
    
  }

  let my_cont_2=document.querySelector(".cont-box-c").addEventListener("click",contshow2)

  function contshow3(){
    window.open('https://x.com/ER_R_R', '_blank');
  }

  let my_cont_3=document.querySelector(".cont-box-e").addEventListener("click",contshow3)

  function downloadResume(){
    url = "https://drive.google.com/file/d/1J20RogUgH5AN7eKmV9uhcF_BO8dn4eS5/view?usp=drive_link";
         window.open(url);
  }
  