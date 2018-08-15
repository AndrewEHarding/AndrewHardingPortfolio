$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(window).on("scroll", function () {

        let offset = window.pageYOffset;
        let paraOffset = offset * 0.7;

        $(".scroll1").css("backgroundPositionY", paraOffset + "px");
        $(".scroll2").css("backgroundPositionY", (paraOffset + 600) + "px");
        $(".scroll3").css("backgroundPositionY", paraOffset + "px");
    });


});//End of document.ready