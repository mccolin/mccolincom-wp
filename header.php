<?php
/**
 * McCOLIN.COM
 * Theme Header
 *
 * Colin McCloskey
 * Aug 2011
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
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  
  <!-- Typography and Primary Stylesheet -->
  <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_bloginfo('template_url') . "/css/typography.css" ?>" />
  <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  
  <!-- JQuery and Site JavaScript -->
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo get_bloginfo('template_url') . "/js/floating_nav.js" ?>"></script>
  <script type="text/javascript" src="<?php echo get_bloginfo('template_url') . "/js/powered_by.js" ?>"></script>
  <script type="text/javascript" src="<?php echo get_bloginfo('template_url') . "/js/skin_effect.js" ?>"></script>

  <?php
  /* Add comment-threading support JavaScript if necessary: */
	if ( is_singular() && get_option( 'thread_comments' ) ) { wp_enqueue_script( 'comment-reply' ); }
	?>

	<?php	wp_head(); ?>
  
</head>

<body id="mccolin.com" <?php body_class(); ?>>

  <div id="header-wrapper">
    <div id="header">
	    <div id="header-nav" class="access" role="navigation">
    		<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
    	</div> <!--/#access-->
    	<h1><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><span id="site-greeting">Hi!</span> I'm Colin McCloskey</a></h1>
    	
    	<ul id="toc">
    	  <h3>On this Page</h3>
    	  <!-- Programmatically added: <li><a href="#article1">Recent Article 1</a></li> -->
  	  </ul>
    	
  	</div> <!--/#header-->
	</div> <!--/#header-wrapper-->
	