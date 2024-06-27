$(document).ready(function() {
    const texts = ['Web Developer', 'Artist', 'Gamer'];
    let currentIndex = 0;
  let currentText = '';
  let letterIndex = 0;

  function type() {
    if (letterIndex < texts[currentIndex].length) {
      currentText = texts[currentIndex].charAt(texts[currentIndex].length - letterIndex - 1) + currentText;
      $('.hero-info h2 span').text(currentText);
      letterIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(erase, 2500);
    }
  }

  function erase() {
    if (currentText.length > 0) {
      currentText = currentText.substring(1); 
      $('.hero-info h2 span').text(currentText);
      setTimeout(erase, 30);
    } else {
      currentIndex = (currentIndex + 1) % texts.length; 
      letterIndex = 0;
      setTimeout(type, 1000);
    }
  }

  type();
  });