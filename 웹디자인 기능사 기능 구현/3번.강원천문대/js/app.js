
// var slideIndex=0;
// var curIdx=0;

$(document).ready(function(){
    $("#popup").hide();//팝업숨기기 초기설정
    menu();
    slide();
    tab();
    popup();
})

/*function menu(){//메뉴 전체 적용
    $(".gnb>li").hover(
        function(){
            $(".lnb").stop().slideDown(500);
        },
        function(){
            $(".lnb").stop().slideUp(500);
        }
    )
}*/

function menu(){
    var idx=0;
    $(".gnb>li").hover(
        function(){//마우스 올리면
            idx= $(this).index();//선택된 값의 인덱스 반환
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown(500);
            
        },
        function(){//마우스 치우면
            $(".lnb").stop().slideUp(500);
        }
    )
}

/*function init(){
    for(var i=0;i<=2;i++){
        $("#slide_contents>img").eq(i).hide();
    }
    $("#slide_contents>img").eq(0).show();
}

function slide(){
    setInterval(slide_fade,3000);
}

function slide_fade(){

    $("#slide_contents>img").eq(slideIndex).fadeOut(1000);

    if(slideIndex+1>2){
        $("#slide_contents>img").eq(0).fadeIn(1000);
        slideIndex=0;
    } else {
        $("#slide_contents>img").eq(slideIndex+1).fadeIn(1000);
        slideIndex++;   
    }
 
}*/

function slide(){
    //fadeIn, fadeOut쓰기
    $("#slide_contents img:gt(0)").hide();//첫 번째 이미지 외에 모두 가리기
    setInterval(function(){
        $("#slide_contents img:first").fadeOut(2000).next().fadeIn(2000).end().appendTo("#slide_contents");
    }, 3000);
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
function popup(){
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();
    })
    $("#closeBtn").click(function(){
        $("#popup").hide();
    })
}
