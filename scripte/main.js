$(function(){
    $(".gnb li").hover(
        function() {
            $(this).find(".sub").stop().slideDown()
        },
        function() {
            $(this).find(".sub").stop().slideUp()
        })
    })
    // gnb



    // modal
    $(function(){
        $("#modal_notice").click(function(){
            $(".modal").show();
        });
    });

    $("#modal_btn").click(function(){
        $(".modal").hide()
    })
    // modal

    // slide eq는 nth 차일드라고 생각해도 될듯?
    setInterval(function(){
        $(".sliders").animate({left: "-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("left", 0)
        })
    }, 2200)
    // slide

    //tab
    console.log($("tab_contents_item"))

    $(".tab_title h3").click(function(){
        $(".tab_title h3").removeClass("active")
        $(this).addClass("active")

        var idx = $(this).index()
        $(".tab_contents .item").hide()
        $(".tab_contents .item").eq(idx).show()
    })