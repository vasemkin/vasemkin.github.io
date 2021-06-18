let canvas = document.getElementById('app');
let ctx = canvas.getContext('2d');

export function handleImage(e){
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

export const invert = () => {
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

export const toGray = () => {
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