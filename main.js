window.addEventListener('scroll', function(e){
    
    const target = document.querySelectorAll(".scroll");


    var scrolled =  window.pageYOffset;

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';
    }

    
});