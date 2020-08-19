jQuery(function ($) {
  $("#web").click((e) => {
    $(".blockchain").fadeOut()
    $(".game").fadeOut()

    $(".web").fadeIn()
  })

  $("#blockchain").click((e) => {
    $(".web").fadeOut()
    $(".game").fadeOut()

    $(".blockchain").fadeIn()
  })

  $("#game").click((e) => {
    $(".web").fadeOut()
    $(".blockchain").fadeOut()

    $(".game").fadeIn()
  })

  $("#all").click((e) => {
    $(".web").fadeIn()
    $(".blockchain").fadeIn()
    $(".game").fadeIn()
  })
})
