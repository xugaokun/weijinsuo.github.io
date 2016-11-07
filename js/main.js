/**
 * Created by zhangxueming on 16/9/24.
 */

'use strict';
$(function () {
    function responseAd() {
        //获取设备屏幕的宽度
        var width=$(window).width();
        $(".carousel-inner>.item").each(function (index,item) {
            var $item = $(item);
            var srcImg =$item.data(width>768?"image-lg":"image-sm");
            $item.css("backgroundImage","url("+srcImg +")");
            if (width<768)
            {
                $item.html("<img src='"+srcImg+"'>");
            }
            else {
                $item.empty();
            }

        });

        var ulWidth = 0;
        var x=40;
        if (ulWidth<768)
        {
            $(".container>ul>li").each(function (index,element) {
                ulWidth += element.clientWidth;
            });
            // console.log(ulWidth);
            $(".container>ul").css("width",(ulWidth+x)+"px");
        }
        else {
            $(".container>ul").css("width","auto");
        }


        $(".wjs-news ul li a").each(function (index,ele) {
            var $ele=$(ele);
            $ele.on("mouseover",function () {
                // alert(123);
                $("#wjs-news-title").text($ele.data("title"));
            });
        });


        //手触摸切换轮播图
        var start = 0;
        var end = 0;
        var minMove = 100;
        $(".carousel").on("touchstart",function (ele) {
           start= ele.originalEvent.touches[0].clientX;

        });
        $(".carousel").on("touchmove",function (ele) {
            end = ele.originalEvent.touches[0].clientX;

        });
        $(".carousel").on("touchend",function (ele) {
            if(Math.abs(end-start)>minMove)
            {
                end>start? $(this).carousel("prev"):$(this).carousel("next");
            }
        });

    }
    $(window).on("resize", responseAd).trigger("resize");



});