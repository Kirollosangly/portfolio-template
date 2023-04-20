location.replace('#home');

let about = $('#about').offset().top;

document.querySelectorAll('li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    });
});


$(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > about - 100) {
        $('#scroll-bg').css('cssText', 'background-color: rgba(0, 0, 0, .6)')
        $('#btnUp').fadeIn(500);
    } else {
        $('#scroll-bg').css('cssText', 'transparent !important');
        $('#btnUp').fadeOut(500);
    }
});

$("#btnUp").click(() => {
    $('html, body').animate({ scrollTop: 0 }, 50, 'linear');
});


let regexN = /^[A-Za-z][A-Za-z0-9_.]{7,22}$/
$('#uName').on('input', function () {
    if (regexN.test(this.value)) {
        $('#uName').removeClass('cross-limit') 
        $('#warning-msg').addClass('d-none')
        $('#txtAreaBtn').attr("disabled", false)
    } else {
        $('#uName').addClass('cross-limit')
        $('#warning-msg').removeClass('d-none')
        $('#txtAreaBtn').attr("disabled", true)
    }
})

let regexE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
$('#uEmail').on('input', function () {
    if (regexE.test(this.value)) {
        $('#uEmail').removeClass('cross-limit') 
        $('#warning-msg1').addClass('d-none')
        $('#txtAreaBtn').attr("disabled", false)
    } else {
        $('#uEmail').addClass('cross-limit')
        $('#warning-msg1').removeClass('d-none')
        $('#txtAreaBtn').attr("disabled", true)
    }
})


$(function () {
    let maxChar = 100;
    $("textarea").on('input', function () {
        let charLength = $(this).val().length;
        let character = maxChar - charLength;
        if (character <= 0) {
            $("#limit").text("Reached maximum characters");
            $("#limit").removeClass("text-muted");
            $("#limit").addClass("text-danger");
            $('#remain').addClass("d-none");
            $('textarea').addClass('cross-limit');
            $('#txtAreaBtn').attr("disabled", true)
        } else {
            $("#limit").text(character);
            $('#remain').removeClass("d-none");
            $('textarea').removeClass("cross-limit");
            $('#txtAreaBtn').attr("disabled", false)
            $("#limit").addClass("text-muted");
            $("#limit").removeClass("text-danger");
        }
    });
});




