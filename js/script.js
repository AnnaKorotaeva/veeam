var $window = $(window),
    $mc = $(".modal-content"),
    $vc = $(".video-content");

$window.resize(function () {
  var w = $window.width(),
      h = $window.height();

  $mc.width(w);
  $mc.height(h);
  $vc.css("top", (h / 2 - $vc.height() / 2) + "px");
  $vc.css("left", (w / 2 - $vc.width() / 2) + "px");
});

$mc.click(function (e) {
    e.preventDefault();
    $mc.hide();
});

$(".main-content__video").click(function (e) {
  e.preventDefault();
  $mc.show();
  $window.resize();
});

var $tabs = $(".nav-tabs > li");
$tabs.click(function (e) {
  e.preventDefault();
  var $that = $(this);
  $tabs.removeClass("active");
  $that.addClass("active");
  var $tabId = $("a", $that).attr("href");
  $(".main-container").hide();
  $($tabId).show();
});

var $country = $(".form-country > select");
$country.change(function () {
  var $that = $(this),
      $state = $that.parent().next(".form-state");

  if ($that.val() === "United States") {
    $state.show();
  } else {
    $state.hide();
  }
});

$tabs.click();
$country.change();
