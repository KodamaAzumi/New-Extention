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

document.body.style.textAlign = 'right';

const imglist = document.querySelectorAll('img');
imglist.forEach((img) =>{
    img.style.transform = 'scale(-1,-1)';
});


