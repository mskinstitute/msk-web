
function movimentarElementoDeBusca(obj, evt) {
  var container = $(obj).closest(".container");
  if (!container.hasClass("elemento__ativo")) {
    container.addClass("elemento__ativo");
    evt.preventDefault();
  } else if (
    container.hasClass("elemento__ativo") &&
    $(obj).closest(".main-box").length == 0
  ) {
    container.removeClass("elemento__ativo");
    container.find(".elemento__input").val("");
  }
}
