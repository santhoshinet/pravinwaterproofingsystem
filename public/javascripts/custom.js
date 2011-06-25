// initialise plugins
jQuery(function(){
	
	// jQuery autoAlign
	jQuery("#fsb").autoColumn(50, ".widget-container");
	jQuery("#fsb").autoHeight(".widget-container");
	
	jQuery(".columns").autoColumn(33, ".column");
	jQuery(".columns").autoHeight(".column");
	
	jQuery(".sh_rec_prj_wrap").autoColumn(24, ".sh_rec_prj_item");
	jQuery(".sh_rec_prj_wrap").autoHeight(".sh_rec_prj_item");
	
	jQuery(".sh_lat_posts_wrap").autoColumn(24, ".sh_lat_posts_item");
	jQuery(".sh_lat_posts_wrap").autoHeight(".sh_lat_posts_item");
	
	jQuery(".columns2").autoColumn(33, ".column");
	jQuery(".columns2").autoHeight(".column");
	
	jQuery(".columns3").autoColumn(33, ".column");
	jQuery(".columns3").autoHeight(".column");
	
	jQuery(".columns4").autoColumn(33, ".column");
	jQuery(".columns4").autoHeight(".column");
	
	jQuery(".columns5").autoColumn(33, ".column");
	jQuery(".columns5").autoHeight(".column");
	
	jQuery(".columns6").autoColumn(33, ".column");
	jQuery(".columns6").autoHeight(".column");
	
	jQuery(".columns7").autoColumn(33, ".column");
	jQuery(".columns7").autoHeight(".column");
	
	jQuery(".columns8").autoColumn(33, ".column");
	jQuery(".columns8").autoHeight(".column");
	
	jQuery(".columns9").autoColumn(33, ".column");
	jQuery(".columns9").autoHeight(".column");
	
	jQuery(".columns10").autoColumn(33, ".column");
	jQuery(".columns10").autoHeight(".column");
	
	jQuery(".columns11").autoColumn(33, ".column");
	jQuery(".columns11").autoHeight(".column");
	
	jQuery(".columns12").autoColumn(33, ".column");
	jQuery(".columns12").autoHeight(".column");
	
	jQuery(".columns13").autoColumn(33, ".column");
	jQuery(".columns13").autoHeight(".column");
	
	jQuery(".columns14").autoColumn(33, ".column");
	jQuery(".columns14").autoHeight(".column");
	
	jQuery(".columns15").autoColumn(33, ".column");
	jQuery(".columns15").autoHeight(".column");
	
	// jQuery Watermark Plugin
	jQuery('input[name="s"]').each(function() {
		jQuery(this).Watermark("Enter keywords");
	});
	
	if (jQuery("#coin-slider").length) {
		jQuery('#coin-slider').coinslider({
			width: 980, // width of slider panel
			height: 420 // height of slider panel
		});
	}

	if (jQuery("#nivo-slider").length) {
		jQuery("#nivo-slider").nivoSlider({
			effect:'random', // Specify sets like: 'fold,fade,sliceDown'
			slices: 25, // For slice animations
			boxCols: 8, // For box animations
			boxRows: 4, // For box animations
			animSpeed: 700, // Slide transition speed
			pauseTime: 4000, // How long each slide will show
			startSlide: 0, // Set starting Slide (0 index)
			directionNav: true, // Next & Prev navigation
			directionNavHide: true, // Only show on hover
			controlNav: true, // 1,2,3... navigation
			keyboardNav: true, // Use left & right arrows
			pauseOnHover: true, // Stop animation while hovering
			manualAdvance: false, // Force manual transitions
			captionOpacity: 0.8, // Universal caption opacity
			prevText: 'Prev',
			nextText: 'Next'
		});
	}
	
	if (jQuery(".gototop").length) {
		jQuery.localScroll();
	}
	
});

/* --- DropDown Menu Plugin --- */
ddsmoothmenu.init({
	mainmenuid: "menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

// jquery quicksand
	function reloadPrettyPhoto() {
		jQuery(".pp_pic_holder").remove();
		jQuery(".pp_overlay").remove();
		jQuery(".ppt").remove();
		// edit it with your initialization
		jQuery('a[rel^="prettyPhoto"]').prettyPhoto({
			animationSpeed: 'normal', /* fast/slow/normal */
			opacity: 0.70, /* Value between 0 and 1 */
			showTitle: false, /* true/false */
			allowresize: true, /* true/false */
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'dark_square' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		});
	}
// Custom sorting plugin
jQuery(document).ready(function($) {

	// bind radiobuttons in the form
	var $filterType = $('#filter a');

	// get the first collection
	var $list = $('#gallery');

	// clone applications to get a second collection
	var $data = $list.clone();

	$filterType.click(function(event) {

		if ($(this).attr('rel') == 'all') {
		  var $sortedData = $data.find('li');
		} else {
			var $sortedData = $data.find('.'+ $(this).attr('rel'));
		}

		$('#filter a').removeClass('current_link');
		$(this).addClass('current_link');
			
		$list.quicksand($sortedData, {
		  attribute: 'id',
		  duration: 800,
		  easing: 'easeInOutQuad',
		  adjustHeight: 'auto',
		  useScaling: 'false'
		}, function() {
			reloadPrettyPhoto();
			imagelink();
			videolink();

		});

		return false;
	});

});

// Load Google Fonts
WebFontConfig = {
        google: { families: [ 'Allerta', 'Allerta Stencil', 'Amaranth', 'Anton', 'Arimo', 'Bangers', 'Bevan', 'Bigshot One', 'Brawler', 'Cabin', 'Cabin Sketch', 'Candal', 'Cantarell', 'Coda Caption:800', 'Corben:bold', 'Crushed', 'Cuprum', 'Damion', 'Didact Gothic', 'Droid Sans', 'Droid Serif', 'Fontdiner Swanky', 'Francois One', 'Holtwood One SC', 'Josefin Sans', 'Josefin Slab', 'Judson', 'Lato', 'Limelight', 'Lobster', 'Maiden Orange', 'Mako', 'Merriweather', 'Molengo', 'Open Sans', 'Old Standard TT', 'Oswald', 'Pacifico', 'Rock Salt', 'Ruslan Display', 'Sigmar One', 'Smythe', 'Special Elite', 'Sue Ellen Francisco', 'Tangerine', 'Tenor Sans', 'Ultra', 'UnifrakturCook:bold', 'Vollkorn', 'Yanone Kaffeesatz' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();