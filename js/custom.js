$(document).ready(function() {
    var typed = new Typed('.type', {
        strings: ['Pranto Shikder.', 'A Web-Designer.', 'A Web Developer.', 'A Freelancer.'],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });
});


$(document).ready(function() {
    $('#bar1').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });
    $('#bar2').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });
    $('#bar3').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });
    $('#bar4').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });
    $('#bar5').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });
    $('#bar6').barfiller({
        barColor: "#ffc300",
        duration: 3000
    });

});


$(document).ready(function() {
    $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.venobox').venobox();
    $('.venobox_custom').venobox({
        framewidth: '100px',
        frameheight: '250px',
        border: '6px',
        bordercolor: '#ba7c36',
        numeratio: true
    });

    $('.count').counterUp({
        delay: 10,
        timer: 2000
    })


});

AOS.init({
    duration: 1200,
});

scrollButton = document.getElementById('scroll_button');
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}