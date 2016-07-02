// Your JavaScript
$(function() {
  $('.img-center-fill').load(function(){
    var parent = $(this).parent();
    var imgClass = (this.width/this.height > parent.width()/parent.height()) ? 'wide' : 'tall';
    $(this).addClass(imgClass);
  })
});
