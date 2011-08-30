/**
 * McCOLIN.COM
 * JavaScript "Floating Nav"
 *
 * A floating header and Table of Contents for the current page are
 * auto-generated and navigated here.
 *
 * Colin McCloskey
 * Aug 2011
 */

var floatingNav = {
	doc: document,
	nav: $('.webs_floating_nav'),
	bodyRef: $('#webs_public_body'),
	window: $(window),
	defaultOffset: null,
	defaultBody: null,
	fixed: false,
	edgeCase: "top",
	
	sectYs: new Array(),
	sectNum: 0,
	sectCur: 0,
	checkScroll: true,
	
	getRefLeft: function() { return floatingNav.bodyRef.offset().left; },

	checkPosition: function() {
		var pageY = floatingNav.window.scrollTop();
		if(!floatingNav.defaultOffset) floatingNav.defaultOffset = floatingNav.nav.offset();
		if(!floatingNav.defaultBody) floatingNav.defaultBody = floatingNav.bodyRef.offset();
		if(typeof floatingNav.footeref == 'undefined') floatingNav.footeref = $("#webs_public_footer");
		
		/* when fixed, top is respective of window, when not fixed, it's respective of #webs_public_body */
		if(!floatingNav.fixed) {
			if ((pageY > floatingNav.nav.offset().top - 22 && floatingNav.edgeCase == "top") ||
				(pageY < floatingNav.footeref.offset().top - floatingNav.nav.height() && floatingNav.edgeCase == "bot")) {
				floatingNav.nav.css({
					'position' : 'fixed',
					'left' : floatingNav.defaultOffset.left - (floatingNav.defaultBody.left-floatingNav.getRefLeft()) + "px",
					'top' : '0px'
				});
				floatingNav.fixed = true;
			}
		} else {
			if (pageY < floatingNav.defaultBody.top) {
				floatingNav.nav.css({
					'position': 'absolute',
					'left' :  '759px',
					'top' : '0px'
				});
				floatingNav.fixed = false;
				floatingNav.edgeCase = "top";
			} else if(pageY + floatingNav.nav.height() + 120 > floatingNav.footeref.offset().top) {
				floatingNav.nav.css({
					'position': 'absolute',
					'left' :  '759px',
					'top' : floatingNav.footeref.offset().top - floatingNav.footeref.height() - floatingNav.nav.height()  + 'px'
				});
				floatingNav.fixed = false;
				floatingNav.edgeCase = "bot";
			}
			
			var viewportCentY = pageY+floatingNav.window.height()/5;
			if(floatingNav.checkScroll){
				if(floatingNav.sectCur == 0){
					if(viewportCentY >= floatingNav.sectYs[1]){
						floatingNav.updateSelected(1);
					}
				}else if(floatingNav.sectCur >= floatingNav.sectNum-1){
					if(viewportCentY < floatingNav.sectYs[floatingNav.sectCur]){
						floatingNav.updateSelected(floatingNav.sectCur-1);
					}
				}else{
					if(viewportCentY >= floatingNav.sectYs[parseInt(floatingNav.sectCur)+1]){
						floatingNav.updateSelected(parseInt(floatingNav.sectCur)+1);
					}else if(viewportCentY <= floatingNav.sectYs[floatingNav.sectCur]){
						floatingNav.updateSelected(floatingNav.sectCur-1);
					}
				}
			}
		}
		/*
		if (!!location.hash && location.hash !== '#overview') {
			$('.selected').removeClass('selected');
			$('.webs_floating_nav a').each(function(i, el) { if (el.href.indexOf(location.hash) !== -1) $(el).parent('li').addClass('selected'); });
		}*/
	},
	
	checkResize: function() {
		if(!floatingNav.defaultBody) floatingNav.defaultBody = floatingNav.bodyRef.offset();
		if(floatingNav.fixed) {
			floatingNav.nav.css({
				'position' : 'fixed',
				'left' : floatingNav.defaultOffset.left - (floatingNav.defaultBody.left-floatingNav.getRefLeft()) + "px"
			});
		}
	},
	
	updateSelected: function(sectCurNew){
		floatingNav.sectCur = sectCurNew;
		$('.selected').removeClass('selected');
		$('.floating_nav_link').eq(floatingNav.sectCur).parent().addClass('selected');
	}
	
}

$(document).ready(function() {
	if(!!location.hash) { floatingNav.checkPosition(); }

	$(window).scroll(function(e) { floatingNav.checkPosition(); });
	$(window).resize(function(e) { floatingNav.checkResize(); });
	
	$('.webs_floating_nav').delegate('a.floating_nav_link', 'click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('.selected').removeClass('selected');
		$(this).parent('li').addClass('selected');
		floatingNav.checkScroll = false;
		$('html,body').animate({
			scrollTop: $(target).length > 0 ? $(target).offset().top : 0
		}, 1000, function() {
			location.hash = target;
			floatingNav.checkScroll = true;
		});
		floatingNav.sectCur = $(this).parent('li').index();
	});
	console.log("Setting section offsets:");
	$('.floating_nav_link').each(function (i) {
	  var sectionAnchor = $($(this).attr("href"));
	  if (sectionAnchor.offset()) {	 
	    floatingNav.sectYs[i] = sectionAnchor.offset().top - 22;   
		  console.log("Section "+i+": "+floatingNav.sectYs[i]);
	  } else {
	    console.log("Section "+i+" does not exist on the page");
	  }
	});
	floatingNav.sectNum = floatingNav.sectYs.length;
	
	floatingNav.window.load(function(){
		var viewportCentY = floatingNav.window.scrollTop()+floatingNav.window.height()/5;
		for(var i in floatingNav.sectYs) {
			if(viewportCentY >= floatingNav.sectYs[i]){
				floatingNav.sectCur = i;
			}
		}
		floatingNav.updateSelected(floatingNav.sectCur);
	});
});



$(document).ready(function(){
  var sections = new Array();
  $(".content").find("h1,h2,h3,h4,h5,h6").each(function(i, e){
    sections.push( $(this) );
  });
  if (sections.length <= 0)
    $("#toc").hide();
  else {
    for (var i=0; i<sections.length; i++) {
      console.log("Creating the link for section with index "+1);
      var section = sections[i];
      var title = section.html();
      var href = "page-section-"+(i+1);
      section.html(title+"<a name=\""+href+"\">&nbsp;</a>");
      $("#toc").append("<li class=\"section-link\"><a href=\"#"+href+"\">"+title+"</a></li>");
    }
  }
  
  
});

