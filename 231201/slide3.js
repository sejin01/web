

var n = 0;
var msg;

function auto() {
    //슬라이드 이동
    n++;
    if (n >= 4){
        $(".slide").animate({left:-n*100+"%"},300,function(){
            $(this).css({"left":0});;
        });
        n = 0; //초기화
    } else 
        $(".slide").animate({left:-n*100+"%"},300);
    
    //페이지 버튼 부분
    $(".page li").eq(n).addClass("select").siblings().removeClass();
    
    //페이지 버튼 부분
    msg = $(".slide li").eq(n).attr("data-ment");
    $(".ment h1").text(msg);
}

var timer = setInterval("auto()",2000);

$("#main").on("mouseover", function(){
    timer = clearInterval(timer);
});

$("#main").on("mouseleave", function(){
    timer = setInterval("auto()",2000);
});

// 버튼 클릭
$(".page li").click(function(){
    // 클릭한 li의 색상 변경 -> .slide 좌표 이동 -> 멘트 교체
    $(this).addClass("select").siblings().removeClass()
    
    n = $(this).index();   // 0 1 2 3
    $(".slide").animate({"left":-n*100+"%"},300);
    
    msg = $(".slide li").eq(n).attr("data-ment");
    $(".ment h1").text(msg);
});


 $(".next").click(function(){
    auto();
});

$(".prev").click(function(){
    n--;
    if (n < 0) {
        n = 3;
        $(".slide").css({"left":-(n+1)*100+"%"});  // -400% 가짜 1번이 있는 위치
        $(".slide").animate({"left":-n*100+"%"},300);
    }
    else
        $(".slide").animate({"left":-n*100+"%"},300);

    $(".page li").eq(n).addClass("select").siblings().removeClass();
    
    //페이지 버튼 부분
    $(".page li").eq(n).addClass("select").siblings().removeClass();
    
    //페이지 버튼 부분
    msg = $(".slide li").eq(n).attr("data-ment");
    $(".ment h1").text(msg);
});
        












