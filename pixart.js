$("#set-color")[0].addEventListener("click", function(event){
  event.preventDefault()
  $(".brush").css("background",$("#color-field").val())
})
