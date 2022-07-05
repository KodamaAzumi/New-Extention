const gsOffbutton = document.getElementById('#gsOff')

gsOffbutton.addEventListener('click', gsOff)

let gsOff = () =>{
    document.body.style.filter = 'grayscale(0%)';
};

