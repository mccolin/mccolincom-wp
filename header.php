<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage McColinCom
 * @since McColinCom 0.9
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <title><?php wp_title( '-', true, 'right' ); ?></title>
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  
  <?php
  /* Add comment-threading support JavaScript if necessary: */
	if ( is_singular() && get_option( 'thread_comments' ) ) { wp_enqueue_script( 'comment-reply' ); }
	?>
	
	<?php
  /* Hook for theme functions to inject header content: */
	wp_head();
  ?>
</head>

<body id="mccolin.com" <?php body_class(); ?>>

  <div id="header">
	  <h1><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">Hi! I'm Colin McCloskey</a></h1>
  	<div id="header-nav" class="access" role="navigation">
  		<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
  	</div> <!--/#access-->
	</div> <!--/#header-->
	
	