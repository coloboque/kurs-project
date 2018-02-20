// Аккордеон Команда на ванильном js
var teamacco__item = document.querySelectorAll(".team-acco__item");
var active;
teamacco__item.forEach(function(item, i, teamacco__item){
	item.addEventListener('click', function(e){
		this.classList.add('team-acco__item--active');
		if (active) {    
				active.classList.remove('team-acco__item--active'); 
				}	
					
			if (active == this){
				active = 0;
				}
	 
			else {
				active = this;
				}
	});
});

// Аккордеон Меню на jQuery
$('.menu-acco__item').click(function(){
    if($('.menu-acco__item').hasClass('menu-acco__item_active'))
        {
          $(this).toggleClass('menu-acco__item_active');
          $('.menu-acco__item_active').not($(this)).removeClass('menu-acco__item_active')
        }
      else{
      $(this).addClass('menu-acco__item_active');
      }
    });

// мобильное меню

$('.mobile-menu').click(function(){
    $('.mob-menu').addClass('mob-menu_active');
});


$('.mob-menu__close').click(function(){
    $('.mob-menu').toggleClass('mob-menu_active');
});


$('.reviews__btn').click(function() {
    $('.modal').toggle();
    $('.modal__content').empty();
    let $a =  $(this).siblings(".reviews__text");
    let $b =  $(this).siblings(".reviews__title");
    let $c = $a.clone();  
    let $d = $b.clone() ;
    let $e = $c+$d;
    $('.modal__content').append($d, $c);
    
   
  });
 
  $('.modal__close').click(function() {
    $('.modal').toggle();
  });


$(document).ready(function(){
  $('body').append($overlay, $modal);
});

$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};