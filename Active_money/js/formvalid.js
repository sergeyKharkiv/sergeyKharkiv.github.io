
// $(document).ready(function() {
function checkParams() {
	var name = $('.name').val();
	var tel = $('.num-phone').val();

	if(name.lenght != 0 && tel.lenght == 11) {
		$('.submitform').removeAttr('disabled');

				$('.submitform').on("click", function(){
	   			$('.wrap-popup').hide();
	   		});

				$('.submitform').on('click', function(){
	   			$('.popup-thanks').show();
	   		});

	   		$('.btn-thanks').on('click', function(){
	   			$('.popup-thanks').hide();
	   		}); 

	} else {
		$('.submitform').attr('disabled');
	}
}
// });

