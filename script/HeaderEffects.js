$(document).ready(function () {
  $("#SearchInput").focusin(function () {
    $("div#searchBox>button>i").addClass("text-2xl");
  });
  $("#SearchInput").focusout(function () {
    $("div#searchBox>button>i").removeClass("text-2xl");
  });
});

$(document).ready(function () {
  $("#HeaderUserBtn").on("click", function () {});
});
