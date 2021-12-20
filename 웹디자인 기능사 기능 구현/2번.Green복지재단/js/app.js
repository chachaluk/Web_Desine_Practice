//초기 변수 설정(전역변수)
var slideCURRENT=0;//현재 슬라이드0
var slideWIDTH=1200;//슬라이드 가로 넓이 1200

$(document).ready(function(){
    init();//초기 설정
    menu();//2순위: 그 다음으로 큰
    popup();//팝업기능: 3순위, 간단하고 쉽고 짧음
    var intervalID=setInterval(slide,3000);//3초마다 slide함
})

function init(){
    $("#popup").hide();//팝업레이어를 숨겨라(초기설정)
}

/*function menu(){//메뉴 호버적용
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
    var $main=$(".gnb>li");//gnb클래스의 하위 li선택
    var $navMain=$(".nav");//nav클래스 선택
    var speed=400;//0.4초

    $main.mouseenter(function(){//마우스가 들어오면
        $(".right_bg").stop().animate({
            height:120
            //높이를 120으로 만들고
        },speed,function(){
            $(".lnb").fadeIn(speed/2);
            //절반의 속도로 나타나기
        });//right_bg fadeIn

        $(this).children("a").addClass("gnb_active");
        //right_bg의 하위 a태그에 gnb_active 클래스 추가
    });

    $main.mouseleave(function(){//마우스가 나가면
        $(".lnb").fadeOut(speed/2,function(){//절반의 속도로 fadeOut
            $(".right_bg").stop().animate({//높이 0으로 만듬
                height:0
            }, speed);
        });

        $(this).children("a").removeClass("gnb_active");
        //현재 선택된 곳의 하위 a의 gnb_active클래스 제거
    });
}

/*function slide(){
    setInterval(slide_move,3000);
}
var newLeft=0
var slideWidth=1200
var slideIndex=0

function slide_move(){
    newLeft=-slideWidth*slideIndex;
    $("#slide_contents").animate({left:newLeft},400,"swing")
    if(slideIndex==2){
        slideIndex=0
    }else{
        slideIndex++
    }
}*/

function slide(){
    //슬라이드가 3이상이면 0으로 초기화
    if(slideCURRENT>=3) slideCURRENT=0;
    //0 1 2, 0 1 2, 0 1 2

    var POS=-slideWIDTH*slideCURRENT;
    //-슬라이드 넓이*0 = -1200*0
    //-슬라이드 넓이*1 = -1200*1
    //-슬라이드 넓이*2 = -1200*2
    //왼쪽 음수 마진

    $("#slide_contents").animate({
        left:POS
    }, 400);

    slideCURRENT++//현재 슬라이드 증가
}

function popup(){
    $(".notice > ul > li:eq(0)").click(function(){
        //공지사항 리스트의 첫번째를 누르면 팝업 호출
        //$("#popup").show();
        $("#popup").fadeIn();//팝업창 서서히 나타나기(페이드 인)
    });
    $("#closeBtn").click(function(){//닫기 버튼 클릭시
        //$("#popup").hide();
        $("#popup").fadeOut();//팝업창 서서히 사라지기(페이드 아웃)
    });
}