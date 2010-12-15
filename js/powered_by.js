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
      "a love of monster trucks",
      "Hebrew lessons",
      "Cliff Lee's throwing motion",
      "his love of Gobstoppers",
      "any and all types of potatoes"
    ];
    powBy = powers[ Math.floor(Math.random() * powers.length) ];
  }  
  $("#powered-by").html(powBy);
}

 
/**
 * When the page loads, adjust the object powering Colin McCloskey according
 * to a series of rules and randomizations. Skin Effects, which should be
 * layered into the JS load later, can further change this field */
$(function(){
  setPoweredBy();
});