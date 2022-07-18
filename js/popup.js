const gsOffbutton = document.getElementById('gsOff')

let gsOff = () =>{
    console.log('gsOffが押されました');
    /*
    document.body.style.filter = 'grayscale(0%)';
    chrome.tabs.reload();
    */
};

gsOffbutton.addEventListener('click', gsOff)

const opOffbutton = document.getElementById('opOff')

let opOff = () =>{
    console.log('opOffが押されました');
    /*
    document.body.style.opacity = '1';
    chrome.tabs.reload();
    */
};

opOffbutton.addEventListener('click', opOff)
