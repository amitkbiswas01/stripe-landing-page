import "../css/main.scss";

(($, Drupal) => {
  Drupal.behaviors.showText = {
    attach: function (context, settings) {
      $("#block-stripe-landing-content", context).css("display", "none");
    },
  };
})(jQuery, Drupal);
