<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the wordpress construct of pages
 * and that other 'pages' on your wordpress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

  <div class="page content">
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
	</div>

<?php endwhile; ?>

<?php get_footer(); ?>