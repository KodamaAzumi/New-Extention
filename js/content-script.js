/*
window.addEventListener('load', function(){
    console.log('ページが読み込まれました');
});

window.addEventListener('scroll', function(){
    console.log("横スクロール：" + window.scrollX);
    console.log("縦スクロール：" + window.scrollY);

    //下にスクロールするほどグレースケールになる
    let gs = window.scrollY/10;
    console.log(gs);
    this.document.body.style.filter = `grayscale(${Math.max(gs, 0)}%)`;

    //下にスクロールするほど不透明度が下がる
    let op = 1-(window.scrollY/1000)*0.5;
    console.log(op);
    this.document.body.style.opacity =`${Math.max(op, 0)}`
});

//右揃え
document.body.style.textAlign = 'right';

//画像を反転させる
const imglist = document.querySelectorAll('img');
imglist.forEach((img) =>{
    img.style.transform = 'scale(-1,-1)';
});

*/

//縦書き
//document.body.style.writingMode= 'vertical-rl';



function setup() {
  document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>');
  let canvas = createCanvas(1920, 1000);
  canvas.parent('p5Canvas');

  // 背景色の設定
  background('rgba(0, 0, 0, 0)');

/*
  window.addEventListener('beforeunload', (event) =>{
    saveCanvas(canvas, 'myCanvas', 'png');
    //event.preventDefault();
    console.log('beforeunloadが機能している');
  });
*/
}

function draw() {
  noStroke();
  fill('rgba(0, 0, 0, 0.2)');
  circle(mouseX, mouseY, 5);
 /*
  stroke('rgba(0, 0, 0, 0.2)');
  strokeWeight(2);
  noFill();
  line(mouseX, mouseY, pmouseX, pmouseY)
  */
}





