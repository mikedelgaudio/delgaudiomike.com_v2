/* SMOOTH SCROLLING */
declare const $: any;

export function smoothScroll() {
  const $root = $("html, body");

  $(".scroller").click(() => {
    $root.animate(
      {
        scrollTop: $("#about").offset().top,
      },
      800
    );
  });

  //Allow scroll animation interruption
  $root.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function (e) {
    if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart") {
      $root.stop();
    }
  });
}
