// sticky menu

const nav = document.querySelector('.nav');
const header = document.querySelector('.page-header');
const height = header.offsetHeight + 25;

const el = document.querySelectorAll('.menu__el');
const anch = document.querySelectorAll('.anch');

window.onscroll = () => {
  nav.classList.toggle('sticky', window.pageYOffset > height);

  for(let i = 0; i < el.length; i++) {
    if(window.pageYOffset + nav.offsetHeight >  anch[i].offsetTop && window.pageYOffset < anch[i].offsetTop + anch[i].offsetHeight) {
      if(i === 0) {
        el[i].classList.remove('active');
        el[i+1].classList.remove('active');
      } else if(i === el.length - 1) {
        el[i].classList.remove('active');
        el[i-1].classList.remove('active');
      } else {
        el[i-1].classList.remove('active');
        el[i+1].classList.remove('active');
      }
      el[i].classList.add('active');
    } else {
      el[i].classList.remove('active');

    }
  }
}

// scroll down

const scrollBtn = document.querySelector('.scroll-down');

scrollBtn.addEventListener('click', () => {
  
});

//slider

const indicator = document.querySelectorAll('.indicator');
const testimonial = document.querySelectorAll('.testimonial');
const slider = document.querySelector('.slider')

indicator.forEach((choose, index) => {
  choose.addEventListener('click', () => {
    removeClasses();
    choose.classList.add('active');
    slider.style.transform = `translate(-${index*100}%)`;  
  })
})

function removeClasses() {
  indicator.forEach((choose) => {
    choose.classList.remove('active');
  })
}

function moveEl() {
  for(let i = 0; i < testimonial.length; i++) {
    testimonial[i].style.transform = 'translate-x(100%)'
  }
}

//hamburger 

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
})

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
})

main.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
})

//gallery 

const work = document.querySelectorAll('.work');
const gallery = document.querySelector('.gallery');
const close = document.querySelector('.close');
const img = document.querySelector('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

work.forEach((el) => {
  el.addEventListener('click', () => {
    gallery.classList.add('active');
    
    const style = getComputedStyle(el).backgroundImage;
    const re = new RegExp('img/work[0-9].png');
    
    img.src = re.exec(style);

    prev.addEventListener('click', () => {
      const reg = new RegExp('[0-7]');
      const currentId = Number(reg.exec(img.src));
      
      img.src = `img/work${currentId-1}.png`;

      if(currentId <= 1) {
        img.src = `img/work${work.length}.png`;
      }
    });

    next.addEventListener('click', () => {
      const reg = new RegExp('[0-7]');
      const currentId = Number(reg.exec(img.src));
         
      img.src = `img/work${currentId+1}.png`;

      if(currentId >= work.length) {
        img.src = `img/work1.png`;
      }
    });
  })
})

function previous(item) {
  const style = getComputedStyle(item).backgroundImage;
  const re = new RegExp('[0-9]');
  
  img.src = `img/work${re.exec(style) - 1}.png`;   
};

close.addEventListener('click', () => gallery.classList.remove('active'));