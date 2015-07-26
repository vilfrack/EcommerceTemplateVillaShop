//carrusel
    $(document).ready(function () {
        $("#owl-demo").owlCarousel({
            navigation: true
        });
    });
    $(document).ready(function () {

        $("#owl-demo2").owlCarousel({
            navigation: true
        });

    });
    $(document).ready(function () {

        $("#owl-demo3").owlCarousel({
            navigation: true
        });

    });
//jquery del menu
    $(document).ready(function ($) {

        $('#mega-1').dcVerticalMegaMenu({
            rowItems: '3',
            speed: 'fast',
            effect: 'show',
            direction: 'right'
        });

    });
/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
