$(document).ready(function() {
  var navbar = document.getElementById('navbar');

  var about = document.getElementById('about');
  var porfolio = document.getElementById('porfolio');
  var blog = document.getElementById('blog');
  var header = document.getElementById('header');
  var contact = document.getElementById('contact');

  var sticky = navbar.offsetTop +52;

  if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
      
    } else if (window.pageYOffset < sticky -52) {
      navbar.classList.remove('sticky');
      
    }
    if(window.pageYOffset < about.offsetTop) {
      document.getElementById('header-nav').classList.add('nav-color');
    } else {
      document.getElementById('header-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= about.offsetTop && window.pageYOffset < porfolio.offsetTop) {
      document.getElementById('about-nav').classList.add('nav-color');
    } else {
      document.getElementById('about-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= porfolio.offsetTop && window.pageYOffset < blog.offsetTop) {
      document.getElementById('porfolio-nav').classList.add('nav-color');
    } else {
      document.getElementById('porfolio-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= blog.offsetTop && window.pageYOffset < contact.offsetTop) {
      document.getElementById('blog-nav').classList.add('nav-color');
    } else {
      document.getElementById('blog-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= contact.offsetTop) {
      document.getElementById('contact-nav').classList.add('nav-color');
    } else {
      document.getElementById('contact-nav').classList.remove('nav-color');
    }
    
  window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');     
    } else if (window.pageYOffset < sticky -52) {
      navbar.classList.remove('sticky');     
    }

    if(window.pageYOffset < about.offsetTop) {
      document.getElementById('header-nav').classList.add('nav-color');
    } else {
      document.getElementById('header-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= about.offsetTop && window.pageYOffset < porfolio.offsetTop) {
      document.getElementById('about-nav').classList.add('nav-color');
    } else {
      document.getElementById('about-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= porfolio.offsetTop && window.pageYOffset < blog.offsetTop) {
      document.getElementById('porfolio-nav').classList.add('nav-color');
    } else {
      document.getElementById('porfolio-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= blog.offsetTop && window.pageYOffset < contact.offsetTop) {
      document.getElementById('blog-nav').classList.add('nav-color');
    } else {
      document.getElementById('blog-nav').classList.remove('nav-color');
    }

    if(window.pageYOffset >= contact.offsetTop) {
      document.getElementById('contact-nav').classList.add('nav-color');
    } else {
      document.getElementById('contact-nav').classList.remove('nav-color');
    }
  }

  openProjects('project-all');

  var header_link = document.getElementById('header-link');

  header_link.addEventListener('mouseover', function() {  
    document.getElementById('arrow').classList.add('rotate-right');
  })

  header_link.addEventListener('mouseout', function() {  
    document.getElementById('arrow').classList.remove('rotate-right');
    document.getElementById('arrow').classList.add('clear-rotate');
  })

  $('#header-link').click(function(e) {
    e.preventDefault();
    var section2 = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section2).offset().top
    }, 'slow');
    $('html, body').animate({
      scrollTop: $(section2).offset().top -52
    }, 0);
  });

  $('#navbar > a, #toTop').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 'slow');
  });

  // For the gap after clicking header-link

  
});

function openProjects(skill) {
  var tabcontents = document.getElementsByClassName('tabcontent');

  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = 'none';
  }

  document.getElementById(skill).style.display = 'block'; 
} 
