var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

(function($) {

    var $container = $(".parallax");
    var $divs = $container.find("div.par-bckg");
    var thingBeingScrolled = document.body;
    var liHeight = $divs.eq(0).closest("li").height();
    var diffHeight = $divs.eq(0).height() - liHeight;
    var len = $divs.length;

    var i, div, li, offset, scroll, top, transform;

    //cache initial offsets
    var offsets = [];


    offsets =$divs.get().map(function(div,d){
        return $(div).offset();
    });

    var render = function(){

        //thing were scrolling
        top = thingBeingScrolled.scrollTop;

        for(i = 0; i < len; i++){

            //get the DOM object div
            div = $divs[i];

            //calculate the offsetTop of div
            offset = offsets[i].top;
                                  
            //calculate the amount to scroll
            scroll = ~~(((top - offset) / liHeight) * diffHeight);
            
            // create transform string
            transform = 'translate3d(0px, ' + scroll + 'px,0px)';

            //apply the scroll amount
            div.style.webkitTransform = transform;
            div.style.mozTransform = transform;
            div.style.transform = transform;

        }

    };

    (function loop(){

        requestAnimationFrame(loop);
        render();

    })();

})(jQuery);