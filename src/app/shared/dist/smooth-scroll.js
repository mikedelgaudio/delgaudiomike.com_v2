"use strict";
exports.__esModule = true;
exports.smoothScroll = exports.getSmoothScroll = void 0;
function getSmoothScroll() {
    return this.smoothScroll.bind(this);
}
exports.getSmoothScroll = getSmoothScroll;
function smoothScroll() {
    var $root = $("html, body");
    $(".scroller").click(function () {
        $root.animate({
            scrollTop: $("#page-top").offset().top
        }, 800, function () {
            window.location.hash = "#page-top";
        });
    });
    $("a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            // Store hash
            var hash_1 = this.hash;
            $root.animate({
                scrollTop: $(hash_1).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash_1;
            });
        }
    });
    //Allow scroll animation interruption
    $root.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function (e) {
        if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart") {
            $root.stop();
        }
    });
}
exports.smoothScroll = smoothScroll;
