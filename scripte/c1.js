$(function(){
    $(".gnb li").hover(
        function(){
            $(this).find('.sub').stop().slideDown()
        },
        function(){
            $(this).find('.sub').stop().slideUp()
        }
    )



var index = 0;
$(".slide").eq(index).show()

setInterval(function(){
    var nextindex = (index + 1) % 3
    $('.slide').eq(index).fadeOut()
    $('.slide').eq(nextindex).fadeIn()
    index = nextindex
},3000)

$(".tab_title h3").click(function(){
    $(".tab_title h3").removeClass("active")
    $(this).addClass("active")

    var idx = $(this).index()
    $(".tab_contents ul").hide()
    $(".tab_contents ul").eq(idx).show()
})

$("#modal_popup").click(function(){
    $(".modal").show()
$("#modal_btn").click(function(){
    $(".modal").hide()
})
})



})