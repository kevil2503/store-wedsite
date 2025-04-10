// Animate the "Best Deals" text with Anime.js
anime({
    targets: '.deal-text',
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: 500,
    duration: 1500,
    easing: 'easeOutExpo'
  });
  // Animate product cards on load
anime({
    targets: '.product-card',
    translateY: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'easeOutExpo'
  });
// Animate banner text on load
anime({
    targets: '#bannerText',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeOutBounce'
  });
  
  // Slide in product cards on scroll
  const cards = document.querySelectorAll('.product-card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  cards.forEach(card => observer.observe(card));
  
  // Button click animation
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
      anime({
        targets: button,
        scale: [1, 1.2, 1],
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
  });
    