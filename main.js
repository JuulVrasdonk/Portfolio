window.addEventListener('scroll', function(e){
    
    const target = document.querySelectorAll(".scroll");


    var scrolled =  window.pageYOffset;

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';
    }

    
});

// Fade animation when in viewport

let fadeInElements = document.querySelectorAll(".fade-element");
window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (let i = 0; i < fadeInElements.length; i++) {
    const elem = fadeInElements[i]
    const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();