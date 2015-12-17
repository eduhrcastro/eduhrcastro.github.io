/*
	Prologue by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {
	
        var bar = $('#wrapper');
        
        var title = $('#wTitle');
        var descriptionTitle = $('#wDesTitle');
        var urlLink = $('#wUrl');
        var urlLinkl = $('#wUrlL');
        var des = $('#description');
        
        var obj = $('.item');
        
        var displayBar = function(){
            bar.show('slow');
        }
        
        var hideBar = function(){
            bar.hide('fast');
        }
        
        var isShowing = function(){
            var state = bar.css('block');
            if(state == "none")
                return false;
            return true;
        }
    
        var workClicked = function(){
            
            if(isShowing())
                hideBar();
            
            var self = $(this);
            var parentSelf = self.closest('.item');
            
            var item = -1;
            
            for(var pos=0;pos<obj.length;pos++){
                if($(obj[pos]).is(parentSelf)){
                    item = pos;
                }
            }
            
            var titleClicked;
            var urlLinkClicked;
            var descriptionClicked = " ";
            
            switch(item){
                //10 Ways    
                case 0:
                    titleClicked = "10 Ways Against Corruption";
                    urlLinkClicked = "https://github.com/eduhrcastro/10-Medidas";
                    break;
                //Pic03    
                case 1:
                    titleClicked = "Pic 03";
                    urlLinkClicked = "http://eduhrcastro.github.io/#portfolio";
                    break;
                //IFCE Mobile
                case 2:
                    titleClicked = "IFCE Mobile";
                    urlLinkClicked = "https://github.com/eduhrcastro/IFCE-Mobile";
                    break;
                //Pic05    
                case 3:
                    titleClicked = "Pic 05";
                    urlLinkClicked = "http://eduhrcastro.github.io/#portfolio";
                    break;
                //Nucleus    
                case 4:
                    titleClicked = "Nucleus";
                    urlLinkClicked = "https://github.com/Nucleus-Technology/nucleus.eti.br";
                    break;
                //Graphs    
                case 5:
                    titleClicked = "Graphs";
                    urlLinkClicked = "https://github.com/eduhrcastro/graphs";
                    break;
            }
            
            title.text(titleClicked);
            descriptionTitle.text("Project Description");
            urlLink.text("URL");
            urlLinkl.attr("href",urlLinkClicked);
            des.text(descriptionClicked);
            
            displayBar();
        }
        
        $('.showAnimation').click(workClicked);
        $('#close-wrapper').click(hideBar);
        
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);
            
                $('#headerToggle').click(hideBar);
            
			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);