const docs = document.querySelectorAll('.doc');

const initGame = async () => {

    const showDocs = () => {

        return new Promise((resolve, reject) => {
    
            try {

                const duration = 500;
    
                const tl = anime.timeline({loop : false});

                tl.add({
                    targets: docs,
                    scale: [0,1],
                    easing: 'easeInOutQuad',   
                    duration: duration,
                });

                tl.finished.then(() =>{ resolve(); });
                
            } catch (error) {
                
                console.error(error);
                reject(error);
    
            }
    
        })
    }
    
    await showDocs();

    docs.forEach((doc) => {
        doc.classList.add('floating');
    });

}

initGame();

$('.doc').on('click', async function() {

    if (!this.classList.contains('in_action') && !this.classList.contains('other')) {

        this.classList.add('in_action');

        docs.forEach((doc) => {
            doc !== this ? doc.classList.add('other') : null;
        });

        const otherDocs = document.querySelectorAll('.other');
        otherDocs.forEach((doc) => {
            doc.classList.remove('floating');
        });

        const hideOtherDocs = () => {

            return new Promise((resolve, reject) => {
        
                try {
    
                    const duration = 300;
        
                    const tl = anime.timeline({loop : false});

                    tl.add({
                        targets: otherDocs,
                        scale: [1,0.3],
                        easing: 'easeOutQuad',   
                        duration: duration,
                    });

                    tl.finished.then(() => { resolve(); });
                    
                } catch (error) {
                    
                    console.error(error);
                    reject(error);
        
                }
        
            })
        }
    
        await hideOtherDocs();

        const showStatus = (status) => {
            // Wrap every letter in a span
            return new Promise((resolve, reject) => {

                try {

                    var textWrapper = document.querySelector('.status_text');
                    textWrapper.style.display = 'block';
                    textWrapper.style.opacity = '1';
                    textWrapper.innerHTML = status;
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
                    const textAnim = anime.timeline({loop: false})
                    .add({
                        targets: '.status_text .letter',
                        translateY: [-100,0],
                        easing: "easeOutExpo",
                        duration: 1400,
                        delay: (el, i) => 30 * i
                    }).add({
                        targets: '.status_text',
                        opacity: 0,
                        duration: 400,
                        easing: "easeOutExpo",
                        delay: 100
                    });
        
                    textAnim.finished.then(() =>{
                        textWrapper.style.display = 'none';
                        resolve();
                    });
                    
                } catch (error) {
                    
                    reject(error);

                }

            })

        }

        const statuses = ['оформляем офшор', 'звоним в швейцарию', 'собираем документы', 'подписываем бумаги', 'уточняем доли', 'считаем бухгалтерию', 'летим на кипр']
        
        await showStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        await showStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        await showStatus(statuses[Math.floor(Math.random() * statuses.length)]);

        const checkWinner = () => {
            const secret = Math.floor(Math.random() * 101);
            console.log(secret);
            return secret < 37
        }

        const showPrise = (win) => {

            return new Promise((resolve, reject) => {

                try {

                    if (win === true) {
                        document.querySelector('.endgame__text').innerHTML = 'поздравляем! ты достиг королвевского результата. дарим тебе скидку 10% на мерч - промокод GAME10';
                        document.querySelector('.prise').classList.add('winner');
                    } else {
                        document.querySelector('.endgame__text').innerHTML = 'обычный ершик. ничего страшного, с должным упорством ты достигнешь цели. попробуй ещё раз';
                        document.querySelector('.prise').classList.add('loser');
                    }
    
                    const tl = anime.timeline({loop : false});
                    tl.add({
                        targets: '.endgame',
                        duration : 900,
                        easing: 'easeInOutExpo',
                        opacity : [0, 1]
                    });
                    tl.finished.then(() => { resolve() })
                    
                } catch (error) {
                    
                    reject(error);

                }

            })

        }

        await showPrise(checkWinner());

    }

});

$('#restart').on('click', async function() {

    const docs = document.querySelectorAll('.doc');

    const fadeOut = anime.timeline({loop : false});
    fadeOut.add({
        targets: '.main',
        opacity: [1, 0],
        easing : 'easeOutExpo',
        duration : 900
    });

    fadeOut.finished.then(() => {

        docs.forEach((doc) => {
            doc.classList = ['doc'];
            anime({
                targets: doc,
                scale : 0,
                easing : 'linear',
                duration: 0
            });
        })
        
        document.querySelector('.endgame').style.opacity = 0;
        document.querySelector('.endgame__text').innerHTML = '';
        document.querySelector('.prise').classList = ['prise'];

        const fadeIn = anime.timeline({loop : false});
        fadeIn.add({
            targets: '.main',
            opacity: [0, 1],
            easing : 'easeInOutExpo',
            duration : 50
        });

        fadeIn.finished.then(() => {
            initGame();
        })

    });

   


});