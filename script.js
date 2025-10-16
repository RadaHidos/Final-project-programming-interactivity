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


//lazy load images


const LazyImages = (entries, obs4) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded'); 
      obs4.unobserve(entry.target);             
    }
  });
};
const observerOptions4 = {
        rootMargin: "50px",
      };
const observer4 = new IntersectionObserver(LazyImages, observerOptions4);
document.querySelectorAll('.gallery-grid .lazy-image').forEach(el => observer4.observe(el));



//appear FAQ
const slideInFAQ = (entries, obs5) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear-right'); 
      //obs.unobserve(entry.target);             
    }
  });
};
const observer5 = new IntersectionObserver(slideInFAQ);
document.querySelectorAll('.faq-container .slide-FAQ').forEach(el => observer5.observe(el));


//sticky title in FAQ section
const StickyTitle = function (entries, obs6) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-sticky");
            //observer1.unobserve(entry.target);
          }
        });
      };

const observer6 = new IntersectionObserver(StickyTitle);
const elements6 = document.querySelectorAll(".faq-intro");
elements6.forEach((el) => observer6.observe(el));


//switch the toggle buttons

const toggleButtons= document.querySelectorAll('.billing-toggle .toggle-btn');
const prices = document.querySelectorAll('.plan__price');
toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active state from all buttons
    toggleButtons.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    // Add active state to the clicked one
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');

    const billingType = btn.textContent.trim().toLowerCase();

    prices.forEach((price) => {
      const newPrice = price.dataset[billingType];
      if (newPrice) price.textContent = newPrice;
    });
  });
});