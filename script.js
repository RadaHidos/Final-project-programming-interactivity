// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

mobileToggle.addEventListener('click', () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';

    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    mobileToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});



// hero title, paragraph and button entry
const slideInRightHero = (entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in'); 
      //obs.unobserve(entry.target);             
    }
  });
};
const observer = new IntersectionObserver(slideInRightHero);
document.querySelectorAll('.hero-text .scroll-in').forEach(el => observer.observe(el));





// fade in all titles
const fadeInTitle = (entries, obs2) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); 
      //obs1.unobserve(entry.target);             
    }
  });
};
const observer2 = new IntersectionObserver(fadeInTitle);
document.querySelectorAll('.fade-inTitle').forEach(el => observer2.observe(el));





//slide up the cards
const slideUpCards = (entries, obs1) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear-in'); 
      //obs1.unobserve(entry.target);             
    }
  });
};
const observerOptions = {
        threshold: 0.3,
      };
const observer1 = new IntersectionObserver(slideUpCards, observerOptions);
document.querySelectorAll('.cards-grid .slide-up').forEach(el => observer1.observe(el));



//slide up the pricing plans
const slideUpPlans = (entries, obs3) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rise'); 
      //obs3.unobserve(entry.target);             
    }
  });
};
const observerOptions3 = {
        threshold: 0.3,
      };
const observer3 = new IntersectionObserver(slideUpPlans, observerOptions3);
document.querySelectorAll('.plans .appear-up').forEach(el => observer3.observe(el));



// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});


// FAQ:
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

