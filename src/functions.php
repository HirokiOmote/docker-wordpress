<?php
// オリジナルテーマのCSSとJavascriptを追加

if (!is_admin()) {
	function register_style() {
		wp_register_style('style', get_stylesheet_uri() .'/style.css');
	}

  function add_stylesheet() {
      register_style();
      wp_enqueue_style('all');
  }

	function register_script() {
		wp_register_script('main', get_stylesheet_directory_uri() . '/js/main.js', array(), '', true);
	}

	function add_script() {
		register_script();
    wp_enqueue_script('main');
  }

	add_action('wp_print_styles', 'add_stylesheet');
	add_action('wp_print_scripts', 'add_script');
}
