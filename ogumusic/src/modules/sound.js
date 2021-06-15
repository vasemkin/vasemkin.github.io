let imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
let canvas = document.getElementById('app');
let ctx = canvas.getContext('2d');

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

export const play = () => {
    document.querySelector('.pixels__wrapper').innerHTML = '';
    synth.triggerAttackRelease(88, '8n');

    let data = ctx.getImageData(0, 0, 3200, 1920);
    //let pixels = chunk(data.data,3);

    //console.log(pixels);
    //let pixels = [];

    let notes = [];

    for (let i = 0; i < data.data.length; i += 4) {

        i % (Math.ceil(data.data.length/100)) == 0 ? notes.push(data.data[i] + data.data[i+1] + data.data[i+2]) : null;  
    
    }

    console.log(notes);
    
    var index = 0;

    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
    }, '8n');
    
    function repeat(time){
        let note = notes[index % notes.length];
        synth.triggerAttackRelease(note, '8n', time);
        index++;
    }

    Tone.Transport.start();

    setTimeout(() => {
        Tone.Transport.stop();
    }, 10000);

    notes.forEach(el => document.querySelector('.pixels__wrapper').innerHTML += el + 'hz' + ' ');
    
}

export const harmony = () => {
    document.querySelector('.pixels__wrapper').innerHTML = '';
    synth.triggerAttackRelease(88, '8n');

    let data = ctx.getImageData(0, 0, 3200, 1920);
    //let pixels = chunk(data.data,3);

    //console.log(pixels);
    //let pixels = [];

    let notesheet = {
        'c' : 16,
        'd' : 18,
        'e' : 20,
        'f' : 21,
        'g' : 24,
        'a' : 27,
        'b' : 30
    };

    let scale = [notesheet.c, notesheet.d, notesheet.e, notesheet.f, notesheet.g, notesheet.a, notesheet.b];
    let fullscale = [];
    scale.forEach(el => {
        let tmp = []
        for (let i = 0; i < 6; i++) {
            fullscale.push(el * Math.pow(2,i));
        }
    });


    let notes = [];
    fullscale.push(0);

    for (let i = 0; i < data.data.length; i += 4) {

        i % (Math.ceil(data.data.length/100)) == 0 ? notes.push(data.data[i] + data.data[i+1] + data.data[i+2]) : null;  
    
    }

    harmony = [];
    notes.forEach(el => {
        let closest = fullscale.reduce(function(prev, curr) {
            return (Math.abs(curr - el) < Math.abs(prev - el) ? curr : prev);
          });

        harmony.push(closest);
        console.log(closest);
    });

    var index = 0;

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