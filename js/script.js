
$('.hamburger').on('click', function () {
  var $navbar = $(this).parents('.inner-header').find('.navbar-collapse');
  var $navHm  = $(this).closest('.nav-hm');

  if ($navbar.hasClass('collapse')) {
      $navbar.removeClass('collapse');
      $navHm.addClass('nav-open');
      $(this).attr('aria-expanded', 'true');
  } else {
      $navbar.addClass('collapse');
      $navHm.removeClass('nav-open');
      $(this).attr('aria-expanded', 'false');
  }
});
/*
var intervalSetting = setInterval(function() {
  var $next1 = $(".careerSection .set.active").removeClass("active").next(".set");
  if ($next1.length) {
    $next1.addClass("active");
  } else {
    $(".careerSection .set:first").addClass("active");
  }
}, 3000);*/
$(".right.direction").click(function() {
  //clearInterval(intervalSetting);
  var $next = $('.careerSection .set.active').removeClass('active').next('.set');
    if ($next.length) { $next.addClass('active'); }
    else {
      $(".careerSection .set:first").addClass('active');
    }
});
$(".left.direction").click(function() {
  //clearInterval(intervalSetting);
  var $next = $('.careerSection .set.active').removeClass('active').prev('.set');
    if ($next.length) { $next.addClass('active'); }
    else {
      $(".careerSection .set:last").addClass('active');
    }
});






$(".projectSection .image").on("mouseenter", function(){
    $(this).addClass("active");
}).on("mouseleave", function(){
    $(this).removeClass("active");
}).on("click", function(){
    $(this).toggleClass("active");
});



$('.btnBox .info').on('click', function () {
  if ($(this).hasClass('emailButton')) {
    $('#fromSection').find('.emails').addClass('active');
    $('#fromSection').find('.form').removeClass('active');
    $('.btnBox .info.formButton').addClass('blurMe');
    $('.btnBox .info.emailButton').removeClass('blurMe');
  } else if ($(this).hasClass('formButton')) {
    $('#fromSection').find('.emails').removeClass('active');
    $('#fromSection').find('.form').addClass('active');
    $('.btnBox .info.formButton').removeClass('blurMe');
    $('.btnBox .info.emailButton').addClass('blurMe');
  }


});


$('footer .link').on('click', function () {
  $([document.documentElement, document.body]).animate({ scrollTop: $(".formButton").offset().top}, 700);
  $('#fromSection').find('.emails').removeClass('active');
  $('#fromSection').find('.form').addClass('active');
  $('.btnBox .info.formButton').removeClass('blurMe');
  $('.btnBox .info.emailButton').addClass('blurMe');
});


function postLead() {
  function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    // Trim und leere Eingabe abfangen
    email = email.trim();
    if (!email) return false;

    // Gängiger, relativ robuster Regex für Frontend-Validierung
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailRegex.test(email);
  }
  let formsHasError = false;

  $('.form .form-field').removeClass('has-error');
  $('.formValidMail').addClass('hideMe');


  if(!$("input.name").val().trim()) {
      formsHasError = true;
      $('.form-field.name').addClass('has-error');
  }

  if ($("input.email").val() === '') {

    formsHasError = true;
    $('.form-field.email').addClass('has-error');
    $('.formValidMail').addClass('hideMe');
  }else if (!isValidEmail( $("input.email").val() )) {
      formsHasError = true;
      $('.formValidMail').removeClass('hideMe');
      $('.form-field.email').addClass('has-error');
  }
  if(!$("input.subject").val().trim()) {
      formsHasError = true;
      $('.form-field.subject').addClass('has-error');
  }

  if(!$("#fieldTextarea").val().trim()) {
      formsHasError = true;
      $('.form-field.message').addClass('has-error');
  }


  if(formsHasError) {
      console.log('fehler');
      $([document.documentElement, document.body]).animate({ scrollTop: $(".form").offset().top}, 700);
  }
  if (!formsHasError) {
    console.log('success');
    $('.form .form-field').removeClass('has-error');
    $('.form .form-field').addClass('hideMe');
    $('.formValidMail').addClass('hideMe');

    $([document.documentElement, document.body]).animate({
      scrollTop: $(".form").offset().top
    }, 700);
    $('#success').addClass('active');
    const w = $(window).width();
    if (w > 960) {
      const height3 = $('.contact .cm1').outerHeight();
      $(".contact .cm2 form").css('min-height', height3);
    }
    $('.cm2').addClass('aktive');
  }

}
$(".form").on("submit", function(e) {
    e.preventDefault();
    postLead();
});
