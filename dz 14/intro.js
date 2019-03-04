$(".user-button").on("click", function(){
    $(".conteiner").hide("conteiner")
    var $name = $(".input-name").val()
    var $surname = $(".input-surname").val()
    $(".welcom-name").text($name)
    $(".welcom-surname").text($surname)
})