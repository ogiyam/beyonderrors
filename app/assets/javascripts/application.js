// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require popper
//= require bootstrap
//= require bootstrap-sprockets
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  $('#summernote').summernote({
  height:580,
  fontNames:["YuGothic","Yu Gothic","Hiragino Kaku Gothic Pro","Meiryo","sans-serif","Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],
  lang:"ja-JP",
  });
  });

/**
 * ページ読み込み時の処理
 */
// $(document).ready(function() {
 
// // リッチテキストの設定
// $('#summernote').summernote({
// height:580,
// fontNames:["YuGothic","Yu Gothic","Hiragino Kaku Gothic Pro","Meiryo","sans-serif","Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],
// lang:"ja-JP",
// });
 
// });