const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
        
      },
  });

  const contactForm = document.getElementById("contact-form"),
        contactName = document.getElementById("contact-name"),
        contactEmail = document.getElementById("contact-email"),
        contactMessage = document.getElementById("contact-message"),
        contactStatus = document.getElementById("contact-status")
        

  const sendEmail = (e) =>{
      e.preventDefault();
      
      if(contactName.value != '' && contactEmail.value != ''&& contactMessage.value!= ''){
        
        emailjs.sendForm('service_x7gole5','template_lfftt6q','#contact-form','hCLNKMaIFSZiGystA')
        .then(()=>{
          contactStatus.classList.add('color-blue')

          contactStatus.textContent = 'Message sent ✔'
          setTimeout(()=>{
            contactStatus.textContent = ''
          },5000)
        },(error)=>{
          alert('OOPS! SOMETHING HAS FAILED......',error)
        })
        contactName.value = ""
        contactEmail.value = ''
        contactMessage.value = ''

      }else if(contactName.value == '' ||contactEmail.value == '' || contactMessage.value == ''){
        contactStatus.classList.remove('color-blue')
        contactStatus.classList.add('color-red')

        contactStatus.textContent = 'Write all the input fields 📩'
      }else{
        alert("Something went wrong please try after some time")
      }
  }
  contactForm.addEventListener("submit",sendEmail)  
  
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active-link')
            }else{
              sectionsClass.classList.remove('active-link')
            }
    })
  }

  window.addEventListener('scroll',scrollActive)

 const scrollUp =()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')     
 }

 window.addEventListener('scroll',scrollUp)

 const themeButton = document.getElementById('theme-button')
 const darkTheme = 'dark-theme'
 const iconTheme = 'ri-sun-line'

 const selectedTheme = localStorage.getItem('selected-theme')
 const selectedIcon = localStorage.getItem('selected-icon')

 const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
 const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

 if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
 }

 themeButton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
 })

 const scrollHelder = ()=>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')      
 }

 window.addEventListener('scroll', scrollHelder)

//  const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//  })

 sr.reveal(`.home__data, .projects_container, .footer__container`)
 sr.reveal(`home__info div`, {delay: 600, origin: 'bottom',interval: 100})
 sr.reveal(`skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
 sr.reveal(`skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
 sr.reveal(`qualification__content, .preficiences__card`, {interval: 100})
