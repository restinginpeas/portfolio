$(document).ready(function() {
    const texts = ['Web Developer', 'Artist', 'Gamer'];
    let currentIndex = 0;
    let currentText = '';
    let letterIndex = 0;
  
    function type() {
      if (letterIndex < texts[currentIndex].length) {
        currentText += texts[currentIndex].charAt(letterIndex);
        $('.hero-info h2 span').text(currentText);
        letterIndex++;
        setTimeout(type, 50);
      } else {
        setTimeout(erase, 1000); 
      }
    }
  
    function erase() {
      if (currentText.length > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        $('.hero-info h2 span').text(currentText);
        setTimeout(erase, 30);
      } else {
        currentIndex = (currentIndex + 1) % texts.length;
        letterIndex = 0;
        setTimeout(type, 500); 
      }
    }
  
    type();
  });