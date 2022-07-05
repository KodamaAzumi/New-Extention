window.addEventListener('load', function(){
    console.log('ページが読み込まれました');
});

window.addEventListener('scroll', function(){
    console.log("横スクロール：" + window.scrollX);
    console.log("縦スクロール：" + window.scrollY);

    //下にスクロールするほどグレースケールになる
    //this.document.body.style.filter = `grayscale(${window.scrollY/10}%)`;

    //下にスクロールするほど不透明度が下がる
    this.document.body.style.opacity =`${(1-(window.scrollY/1000)*0.5)}`
});

