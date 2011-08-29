<?php
/**
 * The loop that displays posts.
 *
 * The loop displays the posts and the post content.  See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop.php or
 * loop-template.php, where 'template' is the loop context
 * requested by a template. For example, loop-index.php would
 * be used if it exists and we ask for the loop with:
 * <code>get_template_part( 'loop', 'index' );</code>
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */
?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

  <?php
    $post_categories = wp_get_post_categories( $post->ID );
    $cats = array();
    foreach($post_categories as $c){ 
    	$cat = get_category( $c );
    	$cats[] = "cat-".$cat->slug;
    }
    $cat_classes = join(" ",$cats);
  ?>
  <div class="single content <?php echo $cat_classes ?>">
    <div class="content-title">
      <h2><?php the_title(); ?></h2>
    </div>
    <div class="content-body">
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
  	    <?php mccolin_cat_list(); ?>
  	    <?php mccolin_tag_list(); ?>
  	    <?php mccolin_permalink(); ?>
  			<?php edit_post_link( __( 'Edit', 'twentyten' ), '', '' ); ?>
  	  </span>
  	</div> <!--/#content-body-->
	</div>
	
<?php endwhile; // end of the loop. ?>

  <?php if ( $wp_query->max_num_pages > 1 ) : ?>
  <div class="navigation content">
		<?php previous_posts_link( __( '&larr; Previous page', 'twentyten' ) ); ?>
		<?php next_posts_link( __( 'Next page &rarr;', 'twentyten' ) ); ?>
	</div>
  <?php endif; ?>

