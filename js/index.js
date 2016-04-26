$(function(){
    var btn=$(".heng");
    var bg=$(".nav-header");
    var max=$(".max-box");
    var min=$(".min-box");
    var height=document.documentElement.clientHeight;
    var shop=$(".shop");
    var flag=true;
    btn.click(function(){
        if(flag){
            bg.css("background","#000");
            max.animate({height:height},400);
            shop.animate({backgroundPosition:50},300);
            flag=false;
        }else{
            flag=true;
            shop.animate({backgroundPosition:14},300);
            max.animate({height:0},400,function(){
                bg.css("background","rgba(0,0,0,0.8)");
            });
        }
    });


    //lunbo
    var box=$(".banner-box"); //大盒子
    var a=$(".lunbo a"); //图片
    $(a.eq(0)).css({left:0});

    //经过左右按钮变色
    var left=$(".left");
    var right=$(".right");
    var xiaobtn=$(".btn li");  //小按钮
    var t=setInterval(move,800);
    var now=0;
    var next=0;
    function move(){
        if(!flag){return};
        flag=false;
        next++;
        if(next== a.length){
            next=0;
        }
        a.eq(next).css({left:"100%"});
        a.eq(now).animate({left:"-100%"},800);
        a.eq(next).animate({left:0},800,function(){
            flag=true;
        });
        xiaobtn.eq(now).removeClass("add");
        xiaobtn.eq(next).addClass("add");
        now=next;
    }
    //左右按钮经过
    left.hover(function(){
        left.animate({opacity:1},200);
    },function(){
        left.animate({opacity:0.5},200);
    });
    right.hover(function(){
        right.animate({opacity:1},200);
    },function(){
        right.animate({opacity:0.5},200);
    });
    box.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,1500);
        left.animate({opacity:1});
    });
    //右按钮
    right.click(function(){
        move();
    })
    //左按钮
    left.click(function(){
        if(!flag){return};
        flag=false;
        next--;
        if(next==-1){
            next= a.length-1;
        }
        a.eq(next).css({left:"-100%"});
        a.eq(now).animate({left:"100%"},800);
        a.eq(next).animate({left:"0"},800,function(){
            flag=true;
        });
        now=next;
    })

    //小按钮
        xiaobtn.click(function(){
            var index1=$(this).index();
            //if(index1=now || !flag){return};
            if(index1>now){
                a.eq(index1).css({left:"100%"});
                a.eq(now).animate({left:"-100%"},800);
            }
            if(index1<now){
                a.eq(index1).css({left:"-100%"});
                a.eq(now).animate({left:"100%"},800);
            }
            a.eq(index1).animate({left:0},800);
            xiaobtn.eq(now).removeClass("add");
            xiaobtn.eq(index1).addClass("add");
            now=next=index1;
        });

    //底部
    var btn1=$(".column h3");
    var ul=$(".column-zi");
    var ws=document.documentElement.clientWidth;
    window.onresize=function(){
        ws=document.documentElement.clientWidth;
        console.log(ws);
    };
    btn1.click(function(){
        if(ws>768){
            return false;
        }else{
            $(this).next("ul").slideToggle();
        }

    })

});