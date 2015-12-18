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
        var externalLink = $('#external-link');
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
    
        var showExternalLink = function(){
            externalLink.css('display','block');
        }
        
        var hideExternalLink = function(){
            externalLink.css('display','none');
        }
        
        var workClicked = function(){
            
            hideExternalLink();
            
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
            
            //Detect Mobile Device
            var isMobile = false;
            // device detection
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
                isMobile = true;
            
            var descriptionClicked = " ";
            
            switch(item){
                //10 Ways    
                case 0:
                    titleClicked = "10 Ways Against Corruption";
                    urlLinkClicked = "https://github.com/eduhrcastro/10-Medidas";
                    showExternalLink();
                    $('#nucleusLink').attr("href","http://www.dezmedidas.mpf.mp.br");
                    
                    if(isMobile){
                        descriptionClicked = "Is a project by Federal Prosecutors.";
                        externalLink.text(" dezmedidas.mpf ");
                    }else{
                        descriptionClicked = "This is a project by Federal Prosecutors. The idea of this project is: Teach the people the kinds of corruption, propose some laws against corruption and inform the population how the investigations are doing.";
                        externalLink.text(" dezmedidas.mpf.mp.br ");
                    }
                    
                    break;
                //Pic03    
                case 1:
                    titleClicked = "Pic 03";
                    urlLinkClicked = "http://eduhrcastro.github.io/#portfolio";
                    if(isMobile)
                        descriptionClicked = "Pic 03";
                    else
                        descriptionClicked = "Pic 03";
                    break;
                //IFCE Mobile
                case 2:
                    titleClicked = "IFCE Mobile";
                    urlLinkClicked = "https://github.com/eduhrcastro/IFCE-Mobile";
                    if(isMobile)
                        descriptionClicked = "Inform IFCE students about institute events and departments.";
                    else
                        descriptionClicked = "The main idea is to inform and notify all IFCE students about the whole institute events and departments. Also, if you aren't a IFCE student you can download it too. You can know everything about IFCE and all the courses.";
                    break;
                //Pic05    
                case 3:
                    titleClicked = "Pic 05";
                    urlLinkClicked = "http://eduhrcastro.github.io/#portfolio";
                    if(isMobile)
                        descriptionClicked = "Pic 05";
                    else
                        descriptionClicked = "Pic 05";
                    break;
                //Nucleus    
                case 4:
                    titleClicked = "Nucleus";
                    externalLink.text(" nucleus.eti.br ");
                    urlLinkClicked = "https://github.com/Nucleus-Technology/nucleus.eti.br";
                    showExternalLink();
                    $('#nucleusLink').attr("href","http://nucleus.eti.br");
                    if(isMobile)
                        descriptionClicked = "Is a startup. We do technology.";
                    else{
                        descriptionClicked = "Nucleus is a startup that I'm building with three oder friends. We do technology. But what kind of technology? Software Development, Mobile Aplications, Web Services, Also work with circuits, embedded systems, eletricity and nanotechnology. Visit our website and be smart.";
                    }
                    
                    break;
                //Graphs    
                case 5:
                    titleClicked = "Graphs";
                    urlLinkClicked = "https://github.com/eduhrcastro/graphs";
                    if(isMobile)
                        descriptionClicked = "This project is a library developed in C++.";
                    else
                        descriptionClicked = "This project is a library developed in C++ to facilitate the use of graphs by the development community.";
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