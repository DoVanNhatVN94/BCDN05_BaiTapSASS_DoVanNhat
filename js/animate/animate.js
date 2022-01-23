// <!--/Animate-JS-->

$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#headerOurTeach").addClass("nav-fixed");
        $("#headerOurTeach").addClass("animate__fadeInDownBig");
    } else {
        $("#headerOurTeach").removeClass("nav-fixed");
        $("#headerOurTeach").removeClass("animate__fadeInDownBig");

    }
});
$(window).on("scroll", function () {
    var scroll2 = $(window).scrollTop();
    let mang = ["1", '2', '3', '4', '5', '6', '7', '8'];
    if (scroll2 >= 100) {
        for (var i = 0; i < 8; i++) {
            $(`#people${mang[i]}`).addClass("animate__fadeInLeft");
        }

    }
});
$(window).on("scroll", function () {
    var scroll3 = $(window).scrollTop();
    if (scroll3 >= 850) {
        $("#find_left").addClass("animate__fadeInLeft");
        $("#find_right").addClass("animate__fadeInLeftBig");
    }
});
$(window).on("scroll", function () {
    var scroll2 = $(window).scrollTop();
    let mang = ["1", '2', '3', '4'];
    if (scroll2 >= 1500) {
        for (var i = 0; i < 8; i++) {
            $(`#footer${mang[i]}`).addClass("animate__fadeIn");
        }

    }
});

