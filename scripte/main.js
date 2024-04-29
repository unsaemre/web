$(function(){
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideDown()
    }, function(){
        $(".gnb ul").stop().slideUp()
    })
})

setInterval(function(){
    $(".sliders").animate({top : "-100%"}, function(){
        $(this).append($(".slide").eq(0))
        $(this).css("top", 0)
    })
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
})
$("#modal_btn").click(function(){
    $(".modal").hide()
})