console.log('test');

let imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
let canvas = document.getElementById('app');
let ctx = canvas.getContext('2d');

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

let invert = () => {
    let data = ctx.getImageData(0, 0, 3200, 1920);

    for (let i = 0; i < data.data.length; i += 4) {
  
    // Modify pixel data
    data.data[i + 0] = 255 - data.data[i + 0];        // R value
    data.data[i + 1] = 255 - data.data[i + 1];        // G value
    data.data[i + 2] = 255 - data.data[i + 2];        // B value
    data.data[i + 3] = 255;                           // A value

    }
  
    // Draw image data to the canvas
    ctx.putImageData(data, 0, 0);
    
}

let toGray = () => {
    let data = ctx.getImageData(0, 0, 3200, 1920);
    

    for (let i = 0; i < data.data.length; i += 4) {
    let grey = data.data[i]*0.299 + data.data[i+1]*0.587 + data.data[i+2]*0.114;
  
    // Modify pixel data
    data.data[i + 0] = grey;        // R value
    data.data[i + 1] = grey;        // G value
    data.data[i + 2] = grey;        // B value
    data.data[i + 3] = 255;         // A value

    }
  
    // Draw image data to the canvas
    ctx.putImageData(data, 0, 0);
    
}

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

let play = () => {
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
    
}