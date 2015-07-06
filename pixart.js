$("#form")[0].addEventListener("submit", function(event){
  event.preventDefault()
  $(".brush").css("background",$("#color-field").val())
})
