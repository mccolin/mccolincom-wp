/**
 * McCOLIN.COM
 * JavaScript "Powered By"
 *
 * Styles are modified here on document ready based on the date and
 * other variables.
 *
 * Colin McCloskey
 * Dec 2010
 */


/**
 * The actual manipulation function */
function setPoweredBy(powBy) {
  if (!powBy) {
    var powers = [
      "Diet Pepsi",
      "the funny voice he uses to talk to dogs",
      "the love of his life, <a href=\"http://thebluesunshine.com/\">Lizza</a>",
      "Cliff Lee's throwing motion",
      "his sweet tooth for Nerds rope",
      "any and all types of potatoes",
      "WaWa Hot to Go bowls, however gross they seem"
    ];
    powBy = powers[ Math.floor(Math.random() * powers.length) ];
  }  
  $("#powered-by").html(powBy);
}


/**
 * Provide a manipulation function that allows themes to change the
 * greeting the site gives you in the header */
function setSiteGreeting(greeting) {
  if (greeting)
    $("#site-greeting").html(greeting);
}

/**
 * Provide a manipulation function that allows skins/themes to change
 * the photo credit in the very lower right corner of the footer with
 * a name and link to the photo hosted elsewhere on the web */
function setPhotoCredit(photoName, photoUrl) {
  $("#photo-credit .name").html(photoName);
  
  var link = "<a href=\""+photoUrl+"\">SERVICE</a>";
  if (photoUrl.indexOf("flickr.com") >= 0) link = link.replace("SERVICE","View on Flickr");
  else {
    link = link.replace(photoUrl, "http://flickr.com/mccolin");
    link = link.replace("SERVICE", "View Flickr");
  }
  
  $("#photo-credit .url").html(link);
}

 
/**
 * When the page loads, adjust the object powering Colin McCloskey according
 * to a series of rules and randomizations. Skin Effects, which should be
 * layered into the JS load later, can further change this field */
$(function(){
  setPoweredBy();
  // setSiteGreeting("Yo!");
});

