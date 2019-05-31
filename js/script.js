var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 100) {
    document.getElementById("navbar").className = 'navbar navbar-expand-lg navbar-light fixed-top';
  } else {
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light fixed-top scrolled";
  }
}

$(document).ready(function () {
  $('.modal a').click(function () {
    setTimeout(function () {
      $('.modal').modal('hide')
    }, 300);

  })

})

$(document).ready(function () {
  $('.gallery').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


$(document).ready(function () {
  $('.reviews-box').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1284,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(function () {
  $("#phone").mask("+380 (99) 999 99 99");
});
$(function () {
  $("#phone1").mask("+380 (99) 999 99 99");
});


/* Article FructCode.com */
$(document).ready(function () {
  $("#btn").click(
    function () {
      sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
      return false;
    }
  );
});


  $(document).ready(function () {

    $("#submit").on("click", function () {

      var name = $("#name").val(); // Получаем имя
      var email = $("#email1").val(); // Получаем e-mail
      var message = $("#message").val(); // Получаем сообщение

      $.ajax({

        url: "js/send.php", // Куда отправляем данные (обработчик)
        type: "post",

        data: {
          "name": name,
          "email": email,
          "message": message
        },

        success: function (data) {

          $(".result").html(data); // Выводим результат

        }

      });

    });

  });

