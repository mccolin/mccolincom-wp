<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */
?>

<div id="footer">

  <div id="footer-widgets">
  	<?php dynamic_sidebar( 'pre-footer-widget-area' ); ?>
  	<div class="clear"></div>
  </div>


  <div id="footer-nav" class="access">
  	<?php dynamic_sidebar( 'footer-widget-area' ); ?>
  </div>

  <div class="footnote">
    Colin McCloskey is powered by lots of things, among them <span id="powered-by">Diet Pepsi</span>.<br/>
    This website is powered by his fingers, 
    <a href="http://dreamhost.com/">a server somewhere</a>, and <a href="http://wordpress.org/">a popular blogging engine</a>.
  </div>

  <div id="photo-credit">
    <span class="name">Mega-sized background photo probably from</span>
    <span class="url"><a href="http://flickr.com/mccolin">Flickr</a></span>
  </div>

</div> <!--/footer-->



<?php
  /* Footer hook for template action injection: */
	wp_footer();
?>
</body>
</html>
