
$(function	()	{

	// Cookie validation
	if(jQuery.type($.cookie('skin_color')) != 'undefined')	{
	
		$('aside').removeClass('skin-1');
		$('aside').removeClass('skin-2');
		$('aside').removeClass('skin-3');
		$('aside').removeClass('skin-4');
		$('#top-nav').removeClass('skin-1');
		$('#top-nav').removeClass('skin-2');
		$('#top-nav').removeClass('skin-3');
		$('#top-nav').removeClass('skin-4');
		
		$('aside').addClass($.cookie('skin_color'));
		$('#top-nav').addClass($.cookie('skin_color'));
	}
	else	{	
		$('aside').removeClass('skin-1');
		$('aside').removeClass('skin-2');
		$('aside').removeClass('skin-3');
		$('aside').removeClass('skin-4');
		$('#top-nav').removeClass('skin-1');
		$('#top-nav').removeClass('skin-2');
		$('#top-nav').removeClass('skin-3');
		$('#top-nav').removeClass('skin-4');
		
		$('aside').addClass('skin-1');
		$('#top-nav').addClass('skin-1');
	}
	
	//Skin color
	$('.theme-color').click(function()	{
		//Cookies for storing theme color
		$.cookie('skin_color', $(this).attr('id'));
		
		$('aside').removeClass('skin-1');
		$('aside').removeClass('skin-2');
		$('aside').removeClass('skin-3');
		$('aside').removeClass('skin-4');
		$('#top-nav').removeClass('skin-1');
		$('#top-nav').removeClass('skin-2');
		$('#top-nav').removeClass('skin-3');
		$('#top-nav').removeClass('skin-4');
		
		$('aside').addClass($(this).attr('id'));
		$('#top-nav').addClass($(this).attr('id'));
	});
	
	// Delete values stored in cookies 
	// uncomment code to activate
	//	$.removeCookie('skin_color');
	//
	
	//
	$('.login-link').click(function(e) {
		e.preventDefault();
		href = $(this).attr('href');
		
		$('.login-wrapper').addClass('fadeOutUp');

		setTimeout(function() {
			window.location = href;
		}, 900);
			
		return false;	
	});
	
	//Submenu
	$('aside li').hover(
       function(){ $(this).addClass('open') },
       function(){ $(this).removeClass('open') }
	)
	
	//scroll to top of the page
	$("#scroll-to-top").click(function()	{
		$("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	});

	//Toggle Menu
	$('#sidebarToggle').click(function()	{
		$('#wrapper').toggleClass('sidebar-display');
	});
	
	$('#inboxMenuToggle').click(function()	{
		$('#inboxMenu').toggleClass('menu-display');
	});
	
	$('#sizeToggle').click(function()	{
		$('#wrapper').toggleClass('sidebar-mini');
	});
	
	//Collapse panel
	$('.collapse-toggle').click(function()	{
	
		$(this).parent().toggleClass('active');
	
		var parentElm = $(this).parent().parent().parent().parent();
		
		var targetElm = parentElm.find('.panel-body');
		
		targetElm.toggleClass('collapse');
	});
	
	//Number Animation
	var currentVisitor = $('#currentVisitor').text();
	
	$({numberValue: 0}).animate({numberValue: currentVisitor}, {
		duration: 2500,
		easing: 'linear',
		step: function() { 
			$('#currentVisitor').text(Math.ceil(this.numberValue)); 
		}
	});
			
	var currentBalance = $('#currentBalance').text();
	
	$({numberValue: 0}).animate({numberValue: currentBalance}, {
		duration: 2500,
		easing: 'linear',
		step: function() { 
			$('#currentBalance').text(Math.ceil(this.numberValue)); 
		}
	});
		
	//Check all	checkboxes
	$('#chk-all').click(function()	{
		if($(this).is(':checked'))	{
			$('.inbox-panel').find('.chk-item').each(function()	{
				$(this).prop('checked', true);
				$(this).parent().parent().addClass('selected');
			});
		}
		else	{
			$('.inbox-panel').find('.chk-item').each(function()	{
				$(this).prop('checked' , false);
				$(this).parent().parent().removeClass('selected');
			});
		}
	});
	
	$('.chk-item').click(function()	{
		if($(this).is(':checked'))	{
			$(this).parent().parent().addClass('selected');		
		}
		else	{
			$(this).parent().parent().removeClass('selected');
		}
	});
	
	$('.chk-row').click(function()	{
		if($(this).is(':checked'))	{
			$(this).parent().parent().parent().addClass('selected');		
		}
		else	{
			$(this).parent().parent().parent().removeClass('selected');
		}
	});
	
	//Hover effect on touch device
	$('.image-wrapper').bind('touchstart', function(e) {
		$('.image-wrapper').removeClass('active');
		$(this).addClass('active');
    });
	
	//Dropdown menu with hover
	$('.hover-dropdown').hover(
       function(){ $(this).addClass('open') },
       function(){ $(this).removeClass('open') }
	)

	//upload file
	$('.upload-demo').change(function()	{
		var filename = $(this).val().split('\\').pop();
		$(this).parent().find('span').attr('data-title',filename);
		$(this).parent().find('label').attr('data-title','Change file');
		$(this).parent().find('label').addClass('selected');
	});

	$('.remove-file').click(function()	{
		$(this).parent().find('span').attr('data-title','No file...');
		$(this).parent().find('label').attr('data-title','Select file');
		$(this).parent().find('label').removeClass('selected');

		return false;
	});	

	//theme setting
	$("#theme-setting-icon").click(function()	{ 
		if($('#theme-setting').hasClass('open'))	{
			$('#theme-setting').removeClass('open');
			$('#theme-setting-icon').removeClass('open');
		}
		else	{
			$('#theme-setting').addClass('open');
			$('#theme-setting-icon').addClass('open');
		}

		return false;
	});
	
	//to do list
	$('.task-finish').click(function()	{
		if($(this).is(':checked'))	{
			$(this).parent().parent().addClass('selected');					
		}
		else	{
			$(this).parent().parent().removeClass('selected');
		}
	});

	//Delete to do list
	$('.task-del').click(function()	{			
		var activeList = $(this).parent().parent();

		activeList.addClass('removed');
				
		setTimeout(function() {
			activeList.remove();
		}, 1000);
			
		return false;
	});
	
	// Popover
    $("[data-toggle=popover]").popover();
	
	// Tooltip
    $("[data-toggle=tooltip]").tooltip();
	
});

$(window).load(function() {
	
	// Fade out the overlay div
	$('#overlay').fadeOut(800);
	
	$('body').removeAttr('class');
	$('body').removeAttr('style');

	//Enable animation
	$('#wrapper').removeAttr('class');
});

$(window).scroll(function(){
		
	 var position = $(window).scrollTop();
	
	 //Display a scroll to top button
	 if(position >= 200)	{
		$('#scroll-to-top').attr('style','bottom:8px;');	
	 }
	 else	{
		$('#scroll-to-top').removeAttr('style');
	 }
});
