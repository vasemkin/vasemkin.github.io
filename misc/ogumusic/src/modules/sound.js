let canvas = document.getElementById('app');
let ctx = canvas.getContext('2d');

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

export const play = () => {
    console.log('playing')
    document.querySelector('.pixels__wrapper').innerHTML = ''; //1
    synth.triggerAttackRelease(88, '8n'); //1
    let data = ctx.getImageData(0, 0, 3200, 1920); //1
    
    let notes = []; //1
    for (let i = 0; i < data.data.length; i += 4) {//2
        i % (Math.ceil(data.data.length/100)) == 0 ? //3
        notes.push(data.data[i] + data.data[i+1] + data.data[i+2]) : //4
         null; //5
    }
    console.log(notes); //6
    var index = 0; //6

    Tone.Transport.scheduleRepeat(time => { //7
        repeat(time); //8
    }, '8n');
    
    function repeat(time){ //9
        let note = notes[index % notes.length]; //10
        synth.triggerAttackRelease(note, '8n', time); //10
        index++; //10
    }

    Tone.Transport.start(); //11

    setTimeout(() => { //12
        Tone.Transport.stop(); //13
    }, 10000);

    notes.forEach(el => //14
        document.querySelector('.pixels__wrapper').innerHTML += el + 'hz' + ' ' //15
        );
    
}

export const harmony = () => {
    document.querySelector('.pixels__wrapper').innerHTML = ''; //1
    synth.triggerAttackRelease(88, '8n'); //1
    let data = ctx.getImageData(0, 0, 3200, 1920); //1
    let notesheet = {
        'c' : 16,
        'd' : 18,
        'e' : 20,
        'f' : 21,
        'g' : 24,
        'a' : 27,
        'b' : 30
    }; //1

    let scale = [notesheet.c, notesheet.d, notesheet.e, notesheet.f, notesheet.g, notesheet.a, notesheet.b]; //1
    let fullscale = [];
    scale.forEach(el => { //2
        let tmp = [] //3
        for (let i = 0; i < 6; i++) { //4
            fullscale.push(el * Math.pow(2,i)); //5
        }
    });


    let notes = []; //6
    fullscale.push(0); //6

    for (let i = 0; i < data.data.length; i += 4) { 

        i % (Math.ceil(data.data.length/100)) == 0 ? 
        notes.push(data.data[i] + data.data[i+1] + data.data[i+2]) : null;  
    
    }

    harmony = []; //6
    notes.forEach(el => { //7
        let closest = fullscale.reduce(function(prev, curr) { //8
            return (Math.abs(curr - el) < Math.abs(prev - el) ? //9
            curr : //10
            prev); //11
          });

        harmony.push(closest); //12
        console.log(closest); //12
    });

    var index = 0; //13

    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
    }, '8n');
    
    function repeat(time){
        let note = harmony[index % harmony.length];
        synth.triggerAttackRelease(note, '8n', time);
        index++;
    }

    Tone.Transport.start();

    setTimeout(() => {
        Tone.Transport.stop();
    }, 10000);

    harmony.forEach(el => document.querySelector('.pixels__wrapper').innerHTML += el + 'hz' + ' ');  
}