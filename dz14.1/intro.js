$("button").on("click", function(){
    var value = $('#wish').val();
    var newItem = '<div class="wish">' + value + '</div>'
    $('.wish').append(newItem);

})