'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------

    svg4everybody();

    $('input[placeholder], textarea[placeholder]').placeholder();

    $(document).ready(function() {
        $("a.scrollto").click(function () {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top - 20;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });

        $("#testimonials-form").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true
                },
                text: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя"
                },
                email: {
                    required: "Введите e-mail"
                },
                text: {
                    required: "Введите сообщение"
                }
            }
        });

        $("#contacts-form").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true
                },
                text: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя"
                },
                email: {
                    required: "Введите e-mail"
                },
                text: {
                    required: "Введите сообщение"
                }
            }
        });


    });

    $(".phone-input").mask("+999999999999");

    $('select').styler();

});



function initMap() {
    var uluru = {lat: 53.893028, lng: 27.647750};
    var mapZoom = 7;
    if ($(window).outerWidth() < 543 ) {
        mapZoom = 5;
    }
    var map = new google.maps.Map(document.getElementById('contact-map'), {
        zoom: mapZoom,
        center: uluru
    });

    var adresss1 = new google.maps.Marker({
        position: {lat: 53.893028, lng: 27.647750},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-big.png'
        }
    });

    var adresss2 = new google.maps.Marker({
        position: {lat: 52.103329, lng: 23.736868},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var adresss3 = new google.maps.Marker({
        position: {lat: 53.163624, lng: 29.198084},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var adresss4 = new google.maps.Marker({
        position: {lat: 55.177223, lng: 30.231265},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var adresss5 = new google.maps.Marker({
        position: {lat: 52.427518, lng: 30.909409},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var adresss6 = new google.maps.Marker({
        position: {lat: 53.658328, lng: 23.830180},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var adresss7 = new google.maps.Marker({
        position: {lat: 53.907456, lng: 30.297461},
        map: map,
        icon: {
            url: 'img/sprites/ico-contacts-map-pointer-small.png'
        }
    });

    var styles = [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#3d4037"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#3d4037"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#3d4037"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#3d4037"}]},{"featureType":"administrative.province","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#3d4037"},{"weight":1}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"color":"#3d4037"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"simplified"}]}];

    map.setOptions({
        styles: styles
    });

}






