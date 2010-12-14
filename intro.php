<?php
/**
 * Template Name: Intro
 * Page template for introductory/home page single post.
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */
 
get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

  <h1><?php the_title(); ?></h1>

  <div id="intro-content" class="content">
		<?php the_content(); ?>
	</div>
	
<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>

