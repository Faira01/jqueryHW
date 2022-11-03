$(function(){
    console.log('Lets get ready to party with jQuery!')
})

$('article img').addClass('image-center');

$('article p:last-child' ).remove();

$('#title').css('font-size', Math.random() * 100)

$('ol').append($('<li>"Skibiddy"</li>'))

$('aside').empty().append($('<p>"Sorry for the list, bud"</p>'))

$('.form-control').on("keyup", function(){
    let red= $('.form-control').eq(0).val();
    let blue= $('.form-control').eq(1).val();
    let green= $('.form-control').eq(2).val();
    $('body').css('background-color', "rgb("+ red +","+ blue +","+ green +")")
})

$('img').on('click',function(){
    $(this).remove();
})
