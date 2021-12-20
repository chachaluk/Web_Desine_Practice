

$(document).ready(function(){
    menu();
    slide();
    // tab();
    advanced_tab();
    popup();
})
//ready 함수: 스크립트로 디자인을 바꾸고 태그 조정
//태그가 없으면(null pointer exception) 우리가 적용시키려는 대상이 존재하지 않음
//ready는 태그가 생성되면 실행

function menu(){//메뉴에는 호버를 쓰는게 좋음
    $(".gnb>li").hover(
        function(){//마우스오버시 실행함수
            $(".lnb").stop().slideDown(500);
        },
        function(){//마우스아웃시 실행함수
            $(".lnb").stop().slideUp(500);
        }
    );

}
function slide(){
    setInterval(slide_move,3000);
}

var newTop=0
var slideHeight=300
var slideIndex=0 //0 1 2

function slide_move(){

    newTop=-slideHeight*slideIndex;
                

    $("#slide_contents").animate({top:newTop},400,"swing")
    if(slideIndex==2){
        slideIndex=0;
    }else{
        slideIndex++;
    }
   
}
function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(1).hide();
        $(".tab_contents>div").eq(0).show();

    })
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(0).hide();
        $(".tab_contents>div").eq(1).show();
    })
}
function advanced_tab(){
    
    var idx=0
    $(".tab_btn>a").click(function(){
        idx=$(this).index()
        console.log(idx+"번째")
        $(".tab_contents>div").hide();
        $(".tab_contents>div").eq(idx).show();

    })
}
function popup(){
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();
    })
    $("#closeBtn").click(function(){
        $("#popup").hide();
    })
}