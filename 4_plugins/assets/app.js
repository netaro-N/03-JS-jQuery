$(function () {
  //カルーセル
  $(".pictures").slick({
    dots: true
  });
  //マテリアル
  $("#material").rippleria();
  $("#material").click(function () {
    return false;
  })
  //文字数オーバー
  $('.js-max-char-warning').maxCharWarning();
});
