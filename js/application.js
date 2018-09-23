// // Your JavaScript
// $(function() {
//   function gradeImage(){
//     var parent = $(this).parent();
//     var imgClass = (this.width/this.height > parent.width()/parent.height()) ? 'wide' : 'tall';
//     $(this).addClass(imgClass);
//     console.log(this);
//   }

//   $('.img-center-fill').each(function () {
//     if(this.complete) {
//       gradeImage.call(this);
//     }
//     else {
//       this.addEventListener('load', gradeImage);
//     }
//   });

//   /*
//   var switchPos = $('#new-articles').position().top + $('#new-articles').height();

//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= switchPos) {
//       $(".navbar-wrapper").addClass("darken");

//     } else {
//       $(".navbar-wrapper").removeClass("darken");
//     }
//   });
//   */

//   ;(function($, window, document, undefined) {
//     'use strict';

//     var elSelector    = '.navbar-wrapper',
//       elClassHidden = 'navbar--hidden',
//       elextranav = '.extra-nav',
//       elextranavHidden='.extra-nav-hidden', 
//       throttleTimeout = 250,
//       $element    = $( elSelector  );
//       $nav = $( elextranavHidden )

//     if(!$element.length) return true;

//     var $window     = $( window  ),
//       wHeight     = 0,
//       wScrollCurrent  = 0,
//       wScrollBefore = 0,
//       wScrollDiff   = 0,
//       $document   = $( document  ),
//       dHeight     = 0,

//       throttle = function(delay, fn) {
//       var last, deferTimer;
//       return function() {
//         var context = this, args = arguments, now = +new Date;
//         if( last && now < last + delay  ) {
//           clearTimeout( deferTimer  );
//           deferTimer = setTimeout( function(){ last = now; fn.apply( context, args  );  }, delay  );

//         }
//         else {
//           last = now;
//           fn.apply( context, args  );
//         }
//       };
//     };

//     $window.on( 'scroll', throttle( throttleTimeout, function() {
//       dHeight     = $document.height();
//       wHeight     = $window.height();
//       wScrollCurrent  = $window.scrollTop();
//       wScrollDiff   = wScrollBefore - wScrollCurrent;

//       if(wScrollCurrent <= 0) { // scrolled to the very top; element sticks to the top
//         $element.removeClass(elClassHidden);
//         $element.removeClass(elClassTop);
//         $nav.addClass(elextranav);
//       }

//       else if(wScrollDiff > 10 && $element.hasClass(elClassHidden)) // scrolled up; element slides in
//         $element.removeClass( elClassHidden  );

//       else if(wScrollDiff < -10) {// scrolled down
//           if(wScrollCurrent + wHeight >= dHeight && $element.hasClass(elClassHidden)) // scrolled to the very bottom; element slides in
//             $element.removeClass( elClassHidden  );

//           else // scrolled down; element slides out
//             $element.addClass( elClassHidden  );

//         }

//         wScrollBefore = wScrollCurrent;
//     }));


//   })( jQuery, window, document  );
// });

// function onYouTubeIframeAPIReady() {
//   $('.youtube-video').each(function() {
//     var id = $(this).data('id');

//     var player = new YT.Player('youtube-video-' + id, {
//       events: {
//         'onStateChange': onPlayerStateChange
//       }
//     });

//     function onPlayerStateChange(event) {
//       if(event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED)
//         $('#youtube-title-' + id).show();
//       else
//         $('#youtube-title-' + id).hide();
//     }

//   });
// }

