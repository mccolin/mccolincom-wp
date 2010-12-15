/**
 * McCOLIN.COM
 * JavaScript Skinning
 *
 * Styles are modified here on document ready based on the date and
 * other variables.
 *
 * Colin McCloskey
 * Dec 2010
 */

/**
 * Default skin effect */
function skinDefault() {
  return {
    "body": {
      "background": "#617EDA url(http://farm2.static.flickr.com/1240/553404266_75cc79deda_o.jpg) fixed repeat-x -600px -150px",
    },
    "h1": {
      "background": "#516009",
      "color": "#FFF"
    },
    "h1 a": {
      "color": "#FFF"
    }
  };
}


/** Christmastime skin effect */
function skinXMas() {
  setPoweredBy("Santa's leftover cookies and milk");
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2310/2081231053_acfb528196_o.jpg) fixed repeat-x 0 -250px" },
    "h1": { "background": "#A00", "color": "#FFF" },
    "h1, h1 a": { "color": "#FFF" },
    ".access li a": { "background": "#000", "color": "#FFF" },
    ".access li.current-menu-item a, .access li.current_page_parent a": { "background": "rgba(170,0,0,0.75)", "color": "pink"},
    ".content a": { "color": "#A00" },
    "#footer .footnote": {
      "background": "rgba(255, 255, 255, 0.65)",
      "color": "#000",
      "margin-top": "1.5em",
      "padding": "0.5em",
      "width": "700px"
    },
    "#footer .footnote a": { "color": "#A00" }    
  }
}


/** Halloweentime skin effect */
function skinHalloween() {
  return {
    "body": {"background": "#000" }
  };
}


/** Bosssstttonnn skin effect */
function skinBoston() {
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2178/2214776911_76356529e0_o.jpg) fixed repeat-x -100px -250px" }
  };
}


/** Upclose Beard Action skin effect */
function skinBeardy() {
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2271/2376062537_c5c7e23943_o.jpg) fixed repeat-x 0 -250px" },
    "h1": { "background": "#785032", "color": "#FFD700"},
    "h1 a": { "color": "#FFD700" },
  };
}


/** Me with my shades at the Exploratorium */
function skinExploratorium() {
  setPoweredBy("those remarkably handsome Ray Bans");
  return {
    "body": { "background": "url(http://farm6.static.flickr.com/5202/5226415923_8ae1a0e51e_o.jpg) fixed repeat-x -1200px -500px" },
    "#header .access li a": { "color": "#000" },
    "#header .access li.current-menu-item a, #header .access li.current_page_parent a": { "color": "#FFD700" }
  }
}


/** Me and a big 'ol beer skin effect */
function skinBigBeer() {
  return {
    "body": { "background": "url(http://farm5.static.flickr.com/4141/5053804492_cae13e53a8_o.jpg) fixed repeat-x -50px -100px" },
    "h1": { "background": "#570400", "color": "#FFF" },
    "h1 a": { "color": "#FFF" },
    ".access li a": { "background": "rgba(51,51,51,0.75)", "color": "#FFF" },
    ".access li.current-menu-item a, .access li.current_page_parent a": { "background": "rgba(200,200,200,0.75)", "color": "#000"},
  };
}


/**
 * Attach to document ready, and trigger the appropriate style cascade based
 * on various parameters */
$(function() {

  // Determine the skin function:
  var skinFn = skinDefault;
  
  // Use time and other variables to swap in different skin functions:
  var test = new Date(2010, 11, 11, 0, 0) //, seconds, milliseconds);
  var now = new Date();  // set to test for testing
  //now = test;
  if (now.getMonth() == 11 && now.getDate() >= 12 && now.getDate() <= 25)
    skinFn = skinXMas;                        // Dec 12 through 25th
  else if (now.getMonth() == 9 && now.getDate() >= 24 && now.getDate() <= 31)
    skinFn = skinHalloween;                   // Week up to Halloween
  else if (now.getDay() == 0)
    skinFn = skinBoston;                      // Sundays
  else if (now.getDay() == 2)
    skinFn = skinBeardy;                      // Tuesdays
  else if (now.getDay() == 5)
    skinFn = skinBigBeer;                     // Fridays
  else if (now.getDay() == 6)
    skinFn = skinExploratorium;               // Saturdays
  
  // Call the skin function to retrieve style selectors and attributes:
  var styleAttr = skinFn();
  
  // Cycle through the selectors and style attributes and set new properties:
  for (selector in styleAttr) {
    attrs = styleAttr[selector];
    for (property in attrs) {
      value = attrs[property];
      $(selector).css(property, value);
    }
  }
  
  // $("body").css("background","url(http://farm3.static.flickr.com/2310/2081231053_acfb528196_o.jpg) repeat-x fixed");
  // url("http://farm3.static.flickr.com/2310/2081231053_acfb528196_o.jpg") repeat-x fixed left -250px transparent
});
