import { handleImage, invert, toGray } from './modules/image'
import { harmony, play } from './modules/sound'

let imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
let canvas = document.getElementById('app');
let ctx = canvas.getContext('2d');

document.getElementById('invert__btn').onclick = invert
document.getElementById('togray__btn').onclick = toGray
document.getElementById('play__btn').onclick = play
document.getElementById('harmony__btn').onclick = harmony