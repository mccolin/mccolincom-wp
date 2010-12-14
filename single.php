<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

  <div class="single content">
    <h2><?php the_title(); ?></h2>
    <span class="dateline"><?php twentyten_posted_on(); ?></span>
    <span class="body">
      <?php 
      if ( is_archive() || is_search() ) :
        the_excerpt();
      else :
        the_content();
      endif;
      ?>
	  </span>
	  <span class="metaline">
	    <?php twentyten_posted_in(); ?>
			<?php edit_post_link( __( 'Edit', 'twentyten' ), '', '' ); ?>
	  </span>
	  
	  <div class="comments-container">
		<?php comments_template( '', true ); ?>
		</div>
	</div>

  <div class="navigation content">
		<?php previous_post_link( '%link', '' . _x( '&larr;', 'Previous post link', 'twentyten' ) . ' %title' ); ?>
		<?php next_post_link( '%link', '%title ' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '' ); ?>
  </div>


<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>