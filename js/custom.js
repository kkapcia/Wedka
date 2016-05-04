/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 1.3
 * Created:October 2014
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$(document).ready(function() {
        function isScrolledTo(elem) {
            var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top; //num of pixels above the elem
            var elemBottom = elemTop + $(elem).height();

            return ((elemTop <= docViewTop));
        }

        var catcher = $('#catcher');
        var sticky = $('#sticky');

        $(window).scroll(function() {
            if(isScrolledTo(sticky)) {
                sticky.css('position','fixed');
                sticky.css('top','0px');
            }
            var stopHeight = catcher.offset().top + catcher.height();
            if ( stopHeight > sticky.offset().top) {
                sticky.css('position','static');

            }
        });
    });


function toggle() {

	var ele = document.getElementById("toggleFilter");

	var text = document.getElementById("displayFilter");

	if(ele.style.display == "block") {

    		ele.style.display = "none";

		text.innerHTML = "show filters";

  	}

	else {

		ele.style.display = "block";

		text.innerHTML = "hide filters";

	}

}

$(function() {
    $('input[name="date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    },
    function(start, end, label) {
        var years = moment().diff(start, 'years');
        alert("You are " + years + " years old.");
    });
});
