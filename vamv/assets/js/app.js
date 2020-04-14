console.log('im gay');

anime({
    targets: '.intro__order-btn',
    translateX: 10
});


function init() {

    /* draw circle on hover for arrow navigation */

    let circleDown = document.querySelector('.link__lines_down path');
    circleDown.style.display = 'none';
    let circleUp = document.querySelector('.link__lines_up path');
    circleUp.style.display = 'none';
    //document.getElementsByClassName(circleDownClass)[0].style.display = "none";

    drawCircle = (circle) => {
        anime.remove(circle)
        circle.style.display = "block";

        let circletl = anime.timeline();
        circletl.add({
            targets: circle,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuad',
            duration: 800,
            direction: 'alternate',
            loop: false
        });
    }

    clearCircle = (circle) => {
        circle.style.display = "none";
    }

    animateDown = () => { drawCircle(circleDown); }
    leaveDown = () => { clearCircle(circleDown) }
    animateUp = () => { drawCircle(circleUp); }
    leaveUp = () => { clearCircle(circleUp) }

    document.querySelector('.link__arrow_down').addEventListener('mouseenter', animateDown, false);
    document.querySelector('.link__arrow_down').addEventListener('mouseleave', leaveDown, false);
    document.querySelector('.link__arrow_up').addEventListener('mouseenter', animateUp, false);
    document.querySelector('.link__arrow_up').addEventListener('mouseleave', leaveUp, false);

    //end of circle hover logic

    debug = () => { console.log('true') }
    bug = () => { console.log('false') }

    //move the indicator
    indicatorRoll = (indicator) => {
        indicatorMovement = anime.timeline({
            easing: 'easeOutExpo'
        });
        indicatorMovement.add({
            targets: indicator,
            translateX: -500,
            duration: 0
        })
        .add({
            targets: indicator,
            translateX: 0,
            duration:300
        });
    }

    //team.htm

    initTeam = () => {
        //move the indicator
        let indicate = document.querySelector('.nav__indicator_team');
        indicate.style.opacity = "1";
        indicatorRoll(indicate);


        //svg animation for names
        drawTeam = (teamMember) => {
            anime({
                targets: teamMember,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInSine',
                duration: 3000,
                direction: 'alternate',
                loop: false
            });
        }

        //clippath animation on hover
        highlightTeam = (evt) => {
            let hoverElement = evt.currentTarget.children[1];
            hoverElement.style.display = "initial";
            anime.remove(hoverElement);

            anime({
                targets: hoverElement,
                clipPath: ['polygon(0% 100%, 0% 0%, 1% 0%, 1% 100%)', 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'],
                easing: 'easeInOutQuad',
                duration: 900
            })
        }

        //destroy clippath
        dehighlightTeam = (evt) =>{
            evt.currentTarget.children[1].style.display = "none";
        }

        //call selectors for svg animation
        drawTeam(document.querySelector('.team__mark path'));
        drawTeam(document.querySelector('.team__zhironkin path'));
        drawTeam(document.querySelector('.team__semkin path'));

        //set handlers for hover animation
        let teamMemberLink = document.querySelectorAll('.team__link');
        for (let i = 0; i < teamMemberLink.length; i++){
            teamMemberLink[i].addEventListener('mouseenter', highlightTeam, false);
            teamMemberLink[i].addEventListener('mouseleave', dehighlightTeam, false);
        }
    }

    destroyTeam = () => {
        document.querySelector('.nav__indicator_team').style.opacity = "0";
    }

    //about.htm

    initAbout = () => {
        let indicate = document.querySelector('.nav__indicator_about');
        indicate.style.opacity = "1";
        indicatorRoll(indicate);
    }

    destroyAbout = () => {
        document.querySelector('.nav__indicator_about').style.opacity = "0";
    }

    //only call objects that exist on the page
    document.body.contains(document.querySelector('.team')) ? initTeam() : destroyTeam();
    document.body.contains(document.querySelector('.about')) ? initAbout() : destroyAbout();

}

init();
document.addEventListener('swup:contentReplaced', init);

const options = [
    {
        from: '(.*)', // meaning any
        to: '(.*)', // meaning any
        in: (next) => {
            let timeline = anime.timeline();

            timeline.add({
                targets: '.transition-fade',
                translateY: -50,
                duration: 10
            });

            timeline.add({
                targets: '.transition-fade',
                translateY: 0,
                duration: 600
            });
            setTimeout(next, 610);
        },
        out: (next) => next()
    }
];


const swup = new Swup({
    plugins: [new SwupJsPlugin(options)]
});