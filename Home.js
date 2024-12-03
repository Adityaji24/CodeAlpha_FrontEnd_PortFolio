   // Typing Animation
   const typingText = document.querySelector('.typing-text');
   const textArray = ['Aditya Tanwani', 'a Coder', 'aspiring  Web Developement'];
   let index = 0;
   let charIndex = 0;
   let currentText = '';
   setInterval(() => {
     if (charIndex < textArray[index].length) {
       currentText += textArray[index][charIndex];
       typingText.textContent = currentText;
       charIndex++;
     } else {
       charIndex = 0;
       currentText = '';
       index = (index + 1) % textArray.length;
     }
   }, 150);

   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
   window.addEventListener('scroll', () => {
     const scrollToTopButton = document.getElementById('scrollToTop');
     scrollToTopButton.style.display = window.pageYOffset > 100 ? 'block' : 'none';
   });
