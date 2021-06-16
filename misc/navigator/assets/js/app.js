// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$('.menu__link_active').click(function(e){
  e.preventDefault();
  let menu = document.getElementById('mobilemenu');
  
  let showMenu = anime.timeline({
    easing: 'easeOutQuad'
  });

  showMenu.add({
    targets: menu,
    duration: 0,
    translateX: 250
  });

  menu.style.display = 'block';
  $('.bg__dark').fadeIn();

  showMenu.add({
    targets: menu,
    duration: 220,
    translateX: 0
  });
});

$('.bg__dark').click(function(e){
  e.preventDefault();
  let menu = document.getElementById('mobilemenu');
  
  let showMenu = anime.timeline({
    easing: 'easeOutQuad'
  });

  $('.bg__dark').fadeOut();

  showMenu.add({
    targets: menu,
    duration: 220,
    translateX: 250
  });

  setTimeout(() => {
    menu.style.display = 'none';
  }, 220);

});

$('.mobilemenu__link').click(function(e){
  e.preventDefault();
  let menu = document.getElementById('mobilemenu');
  
  let showMenu = anime.timeline({
    easing: 'easeOutQuad'
  });

  $('.bg__dark').fadeOut();

  showMenu.add({
    targets: menu,
    duration: 220,
    translateX: 250
  });

  setTimeout(() => {
    menu.style.display = 'none';
  }, 220);
})

let consultingMenuItems = document.querySelectorAll('.consulting__btn');

let changeConsultingMenu = (evt) => {
  //let elementPosition = Array.from(evt.currentTarget.parentNode.children).indexOf(evt.currentTarget);

  let consultingTitleText = evt.currentTarget.innerHTML;
  let buttonNumber = evt.currentTarget.getAttribute('data-value');

  let consultingCurrentPicture;
  let consultingPictures = document.querySelectorAll('.consulting__ninjaimg');
  consultingPictures.forEach(picture => {
    picture.getAttribute('data-value') === buttonNumber ? consultingCurrentPicture = picture : null;
  });

  let consultingCurrentText;
  let consultingTexts = document.querySelectorAll('.consulting__ninjatext');
  consultingTexts.forEach(text => {
    text.getAttribute('data-value') === buttonNumber ? consultingCurrentText = text : null;
  });
  
  let consultingElement = document.querySelector('.consulting__element');

  /*
  //opacity animation:
  anime({
    targets: consultingElement,
    opacity: 0,
    duration: 600,
    easing: 'linear'
  });
  */
 
  let animateCounsiltingElement = anime.timeline();

  animateCounsiltingElement.add({
    targets: consultingElement,
    translateY: -50,
    duration: 0
  });

  animateCounsiltingElement.add({
    targets: consultingElement,
    translateY: 0,
    duration: 900
  });

  let changeConsultingText = () => {

    let consultingTitleElement = document.querySelector('.consulting__subtitle');
    let consultingPictureElement = document.querySelector('.consulting__picture');
    let consultingTextElement = document.querySelector('.consulting__text');

    consultingPictureElement.classList.remove(consultingPictureElement.classList[1]);
    consultingPictureElement.classList.add(consultingCurrentPicture.classList[1]);
    consultingTextElement.innerHTML = consultingCurrentText.innerHTML;
    consultingTitleElement.innerHTML = consultingTitleText;

  }

  setTimeout(() => { 

    changeConsultingText(buttonNumber);
  
    /*
    //opacity animation:
    anime({
      targets: consultingElement,
      opacity: 1,
      duration: 600, 
      easing: 'linear'
    }); 
    */
  
  }, 0);

}

consultingMenuItems.forEach(el => {
  el.addEventListener('click', changeConsultingMenu, null)
})


$('body').scroll(function(){
  anime({
    targets: $(this),
    scrollTop: 800,
    duration: 600
  });
});



let planningMenuItems = document.querySelectorAll('.planning__btn');

let changeplanningMenu = (evt) => {
  //let elementPosition = Array.from(evt.currentTarget.parentNode.children).indexOf(evt.currentTarget);
  let planningTitleText = evt.currentTarget.innerHTML;
  let buttonNumber = evt.currentTarget.getAttribute('data-value');

  let planningCurrentPicture;
  let planningPictures = document.querySelectorAll('.planning__ninjaimg');
  planningPictures.forEach(picture => {
    picture.getAttribute('data-value') === buttonNumber ? planningCurrentPicture = picture : null;
  });

  let planningCurrentText;
  let planningTexts = document.querySelectorAll('.planning__ninjatext');
  planningTexts.forEach(text => {
    text.getAttribute('data-value') === buttonNumber ? planningCurrentText = text : null;
  });
  
  let planningElement = document.querySelector('.planning__element');

  /*
  //opacity animation:
  anime({
    targets: planningElement,
    opacity: 0,
    duration: 600,
    easing: 'linear'
  });
  */
 
  let animateCounsiltingElement = anime.timeline();

  animateCounsiltingElement.add({
    targets: planningElement,
    translateY: -50,
    duration: 0
  });

  animateCounsiltingElement.add({
    targets: planningElement,
    translateY: 0,
    duration: 900
  });

  let changeplanningText = () => {
    let planningTitleElement = document.querySelector('.planning__subtitle');
    let planningPictureElement = document.querySelector('.planning__picture');
    let planningTextElement = document.querySelector('.planning__text');

    planningPictureElement.classList.remove(planningPictureElement.classList[1]);
    planningPictureElement.classList.add(planningCurrentPicture.classList[1]);
    planningTextElement.innerHTML = planningCurrentText.innerHTML;
    planningTitleElement.innerHTML = planningTitleText;
  }

  setTimeout(() => { 

    changeplanningText();
  
    /*
    //opacity animation:
    anime({
      targets: planningElement,
      opacity: 1,
      duration: 600, 
      easing: 'linear'
    }); 
    */
  
  }, 0);

}

planningMenuItems.forEach(el => {
  el.addEventListener('click', changeplanningMenu, null)
});



// IMPORTANT
typeof(document.querySelector) == "undefined" ? console.log('fuck man, this shit wont work') : console.log('querySelector check ok');
//typeof(array.prototype.forEach) == "undefined" ? console.log('fuck man, this shit wont work') : console.log('forEach check ok');

//slider
$('.hierarchy__slider').slick({
  arrows: false,
  dots: true,
  centerMode: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 549,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let getOffsetSum = (elem) => {
      let top=0, left=0
      while(elem) {
          top = top + parseFloat(elem.offsetTop)
          left = left + parseFloat(elem.offsetLeft)
          elem = elem.offsetParent       
      }
      return {top: Math.round(top), left: Math.round(left)}
    }



//hierarchy logic
let itsSchemeButtons = document.querySelectorAll('.hierarchy__more');

let itsSchemeCards = document.querySelectorAll('.hierarchy__card');

let findSchemeDescription = (num) => {
  let schemeDescriptions = document.querySelectorAll('.hierarchy__ninjatext');
  let output;

  schemeDescriptions.forEach(description => {
    description.getAttribute('data-value') == num ? output = description.innerHTML : null;
  });

  return output
}

let handleSchemeButtons = (evt) => {
  let button = evt.currentTarget;
  let elementPosition = button.getAttribute('data-value');
  let elementUnique = button.getAttribute('data-unique');
  let elementHeading = button.parentNode.querySelector('.hierarchy__text').innerHTML;

  let currentSlide = button.parentNode.parentNode;

  let cards = currentSlide.querySelectorAll('.hierarchy__card');

  let popup = document.createElement('div');
  popup.style.position = 'absolute';
  popup.style.top = '127px';
  popup.style.width = currentSlide.style.width;
  popup.style.height = $(currentSlide).height() + 'px';
  //popup.style.padding = '23.36px 29.2px';
  popup.style.padding = $(currentSlide).css('padding');
  popup.style.background = 'transparent';
  popup.style.left = $(button.parentNode.parentNode).offset().left + 'px';
  //popup.style.opacity = 0;
  //popup.innerHTML = elementPosition;
  popup.setAttribute('class', 'hierarchy__popup');
  popup.setAttribute('data-value', elementPosition);
  popup.setAttribute('data-unique', elementUnique);

  let close = document.createElement('button');
  close.innerHTML = '&times;';
  close.setAttribute('class', 'hierarchy__close');
  close.addEventListener('click', handlePopupClose, false);
  popup.appendChild(close);

  let desc = document.createElement('div');
  desc.setAttribute('class', 'hierarchy__description');

  let txt = document.createElement('p');
  txt.innerHTML =  findSchemeDescription(elementPosition);

  let heading = document.createElement('h4');
  heading.innerHTML = elementHeading;
  
  let more = document.createElement('a');
  more.setAttribute('class', 'hierarchy__out');
  more.setAttribute('href', '#contact');
  more.innerHTML = 'Заявка';
  $(more).on('click', function (e) {
    e.preventDefault();
  
    anime({
      targets: document.body,
      scrollTop: $('body').scrollTop() + Math.floor($($(this).attr('href')).position().top),
      duration: 2500,
      easing: 'easeOutExpo'
    });
  
  });

  desc.appendChild(heading);
  desc.appendChild(txt);
  desc.appendChild(more);
  popup.appendChild(desc);

  document.querySelector('.hierarchy__wrapper').appendChild(popup);

  anime({
    duration: 300,
    loop: false,
    direction: 'alternate',
    update: function(anim){
      currentSlide.style.filter = 'blur(' + 20 * anim.progress / 400 + 'px)' }
  });

  anime({
    targets: document.querySelector('.hierarchy__popup'),
    opacity: 1,
    duration: 300,
    easing: 'linear'
  });

}

itsSchemeButtons.forEach(button => {
  button.addEventListener('click', handleSchemeButtons, false);
});

let handlePopupClose = (evt) => {
  let currentButton = evt.currentTarget;
  let currentPopup = currentButton.parentNode;
  
  let findCurrentSlide = (popup) => {
    let currentSlide;
    document.querySelectorAll('.hierarchy__element').forEach(slide => {

      slide.querySelectorAll('.hierarchy__card').forEach(card => {

        card.querySelector('.hierarchy__more').getAttribute('data-unique') == 
        popup.getAttribute('data-unique') && slide.style.filter == 'blur(5px)' ? 
        currentSlide = slide : null;

      });

    });
    return currentSlide;
  }


  anime({
    targets: currentPopup,
    opacity: [1,0],
    duration: 300,
    easing: 'linear'
  });

  let currentSlide = findCurrentSlide(currentPopup);
  let cards = currentSlide.querySelectorAll('.hierarchy__card');

  cards.forEach(card => {
    anime({
      targets: card,
      backgroundColor: '#fff',
      color: '#fff',
      duration: 300,
      easing: 'linear'
    });
  });

  let texts = currentSlide.querySelectorAll('.hierarchy__text');
  texts.forEach(text => {
    anime({
      targets: text,
      color: '#202126',
      duration: 300,
      easing: 'linear'
    })
  });

  console.log(currentSlide);

  anime({
    duration: 300,
    loop: false,
    update: function(anim){
      currentSlide.style.filter = 'blur(' + (100 - anim.progress) / 20 + 'px)' }
  });

  setTimeout(() => {
    currentPopup.parentNode.removeChild(currentPopup);
  }, 301);

}

// Event to initiate drag, include touchstart events
$('.hierarchy__slider').on('mousedown', function(e){

  // Drag start logic
  // ...
 
  // Event to end drag, may want to include touchend events
  $(this).on('mouseup', function(e){
 
   $(this).off('mousemove');
   // Drag stop logic
   // ...
 
  }).on('mousemove', function(){
 
   // Logic for dragging, can get mouse position
   // will probably want to throttle
   // possibly include touchmove events also

   // shitty code, but it works
   // perhaps add a logical or for blur > 0
   let activeSlides = [];
   document.querySelectorAll('.hierarchy__element').forEach(slide => {
     slide.style.filter == 'blur(5px)' ? activeSlides.push(slide) : null;
   });
   
   activeSlides.forEach(slide =>{
     anime({
       duration: 300,
       loop: false,
       update: function(anim){
         slide.style.filter = 'blur(' + (100 - anim.progress) / 20 + 'px)' }
     });
   });

   let popups = document.querySelectorAll('.hierarchy__popup');
   popups.forEach(popup => {
      popup.parentNode.removeChild(popup);

   });
 
  });
 
 });

$('.slick-dots button').click(function(){
  let activeSlides = [];
   document.querySelectorAll('.hierarchy__element').forEach(slide => {
     slide.style.filter == 'blur(5px)' ? activeSlides.push(slide) : null;
   });
   
   activeSlides.forEach(slide =>{
     anime({
       duration: 300,
       loop: false,
       update: function(anim){
         slide.style.filter = 'blur(' + (100 - anim.progress) / 20 + 'px)' }
     });
   });

   let popups = document.querySelectorAll('.hierarchy__popup');
   popups.forEach(popup => {
      popup.parentNode.removeChild(popup);

   });

});



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


let solutionsLogic = () => {
  let solutionsElements = document.querySelectorAll('.solutions__element');
  
  let count = 0;
  solutionsElements.forEach(element => {
    element.style.width = document.querySelector('.hierarchy__element').style.width;
    count++;
    count > slideCount ? $(element).hide() : null;
  });
  $('.solutions__show_less').hide();
  $('.solutions__show_more').show();

  $('.solutions__show_less').click(function(){
    count = 0;
    solutionsElements.forEach(element => {
      element.style.width = document.querySelector('.hierarchy__element').style.width;
      count++;
      count > slideCount ? $(element).slideUp() : null;
    });
    $(this).fadeOut();
    $('.solutions__show_more').fadeIn();
  });

  $('.solutions__show_more').click(function(){
    solutionsElements.forEach(element => {
      $(element).slideDown();
    });
    $(this).fadeOut();
    $('.solutions__show_less').fadeIn();
  });

  let handleSolutionsButtons = (evt) => {
    let button = evt.currentTarget;
    let elementPosition = button.getAttribute('data-value');
    let elementUnique = button.getAttribute('data-unique');

    let currentSlide = button.parentNode.parentNode;

    let popup = document.createElement('div');
    popup.style.top = '127px';
    popup.style.width = currentSlide.style.width;
    popup.style.height = $(currentSlide).height() + 'px';
    //popup.style.padding = '23.36px 29.2px';
    popup.style.padding = $(currentSlide).css('padding');
    popup.style.position = 'absolute';
    popup.style.background = '#fff';
    popup.style.top = 0;
    popup.style.left = 0;
    //popup.style.opacity = 0;
    //popup.innerHTML = elementPosition;
    popup.setAttribute('class', 'solutions__popup');
    popup.setAttribute('data-value', elementPosition);
    popup.setAttribute('data-unique', elementUnique);

    let close = document.createElement('button');
    close.innerHTML = '&times;';
    close.setAttribute('class', 'solutions__close');
    close.addEventListener('click', handleSolutionPopupClose, false);
    popup.appendChild(close);

    let desc = document.createElement('div');
    desc.setAttribute('class', 'solutions__description');
    desc.innerHTML = elementPosition + '<br>'
    + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius laudantium magni perferendis suscipit ad laborum numquam aliquam impedit, sequi quibusdam eos nam quis voluptas pariatur commodi perspiciatis ullam expedita.';
    popup.appendChild(desc);
    $(popup).hide();

    currentSlide.appendChild(popup);
    $(popup).fadeIn();
  }

  let handleSolutionPopupClose = (evt) => {
    let currentButton = evt.currentTarget;
    let currentPopup = currentButton.parentNode;

    $(currentPopup).fadeOut(500);
    setTimeout(() => {
      currentPopup.parentNode.removeChild(currentPopup);
    }, 500);
  }

  let solutionsButtons = document.querySelectorAll('.solutions__text');
  solutionsButtons.forEach(button => {
    button.addEventListener('click', handleSolutionsButtons, null);
  });

}

document.body.contains(document.querySelector('.solutions__element')) ? solutionsLogic() : null;



//activity
let activityLogic = () => {
  let activityNumber = 4;
  let activityTexts = document.querySelectorAll('.activity__hidden'); 


  let switchActivity = (number) => {
    let currentPosition = parseInt(number) - 1;

    let activityTiles =  document.querySelectorAll('.activity__tile');
    activityTiles.forEach(tile => {

      let setInitialWidth = (element) => {
        anime({
          targets: element,
          width: 30,
          duration: 100,
          easing: 'easeOutQuad'
        });
      }

      tile.style.width > '50px' ? setInitialWidth(tile) : null;
    });

    let activityNumberDisplay = document.querySelector('.activity__number');
    activityNumberDisplay.innerHTML = '0' + number;

    let activityDescription = document.querySelector('.activity__description');
    activityDescription.innerHTML = activityTexts[currentPosition].innerHTML;

    let activityTextTimeline = anime.timeline();

    activityTextTimeline.add({
      targets: activityDescription,
      translateY: -20,
      duration: 0,
    });

    activityTextTimeline.add({
      targets: activityDescription,
      translateY: 0,
      duration: 700,
    });

    let activityTileCurrent = document.querySelectorAll('.activity__tile')[currentPosition];
    anime({
      targets: activityTileCurrent,
      width: 61,
      duration: 300,
      easing: 'easeOutSine'
    });

  }

  let handleActivityButtons = (evt) => {
    let buttonNumber = evt.currentTarget.parentNode.getAttribute('data-value');
    switchActivity(buttonNumber);
  }

  let activityButtons = document.querySelectorAll('.activity__preview');
  activityButtons.forEach(button => {
    button.addEventListener('click', handleActivityButtons, null);
  });

  switchActivity(activityNumber);
}

activityLogic();

// THIS IS ONLY FOR DEVELOPMENT
// AND DEMONSTRATION PURPOSES

/*
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(true); 
});
*/

$('.feedback__slider').slick({
  arrows: false,
  dots: false, 
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".feedback__arrow_prev").on("click", function(event) {
  event.preventDefault();

  $('.feedback__slider').slick('slickPrev');
});

$(".feedback__arrow_next").on("click", function(event) {
  event.preventDefault();

  $('.feedback__slider').slick('slickNext');
});


const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

$('.header__arrow').click(function(){
  anime({
    targets: document.body,
    scrollTop: $('body').scrollTop() + viewportHeight + 20,
    duration: 2000,
    easing: 'easeOutExpo'
  });
});

//scroll
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  anime({
    targets: document.body,
    scrollTop: $('body').scrollTop() + Math.floor($($(this).attr('href')).position().top),
    duration: 2500,
    easing: 'easeOutExpo'
  });

});

let jarallaxify = () => {

  document.querySelector('.jarallax-img').style.display = "initial";

  $('.jarallax').jarallax({
    speed: 0.2
  });

}


window.matchMedia('(min-width:800px)').matches ? jarallaxify() : null;

//email - obsolete
/*
(function(){
  emailjs.init('user_WKAhomVyANmBji0htDVDi');
})();

window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gmail', 'template_pSGHNlOc', this);
  });
}
*/

if (window.matchMedia("(max-width: 480px)").matches) {
  $('.activity__options').slick({
    dots: true,
    arrows: false
  });
} 