//callbacks.html
var deleteLog = false;

$(document).ready(function() {
    $('#fullpage').fullpage({
        //각 세션에 배경색
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        //각 세션에 대한 이름 data-menuanchor과 동일해야함
        anchors: ['intro', 'portfolio', 'spec', 'resume'],
        menu: '#menu',
        //navigationV.html
        //각 세션에 대한 이름 data-menuanchor과 동일해야함
        navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['인트로', '포트폴리오', '스팩','이력서'],
        //scrollOverflow.html
        scrollOverflow: true,
        //마우스 내리자마자
        onLeave: function(index, nextIndex, direction){
            
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            
        },
        afterRender: function(){
           
        },
        afterResize: function(){
           
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
           
        },
        afterLoad: function(anchorLink, index){
            if(index == 1 || index == 4){
                $('#menu').addClass("on");
            } else {
                $('#menu').removeClass("on");
            }
        }
    });

});
