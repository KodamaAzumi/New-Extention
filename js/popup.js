
//グレースケールをオフにする処理
const gsOffbutton = document.getElementById('gsOff')
let gsOff = () =>{
    console.log('gsOffが押されました');
    /*
    document.body.style.filter = 'grayscale(0%)';
    chrome.tabs.reload();
    */
};
gsOffbutton.addEventListener('click', gsOff)

//不透明度を100%に戻す処理
const opOffbutton = document.getElementById('opOff')
let opOff = () =>{
    console.log('opOffが押されました');
    /*
    document.body.style.opacity = '1';
    chrome.tabs.reload();
    */
};
opOffbutton.addEventListener('click', opOff)


//スクリーンショットを取って保存する処理
document.getElementById('shbtn').addEventListener('click', async () => {
    // タブ情報取得
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // デバッガアタッチ
    chrome.debugger.attach({ tabId: tab.id }, '1.3', async () => {
      console.log('attach - ok');
  
      // デバッガ起動待機
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      // レイアウト情報取得
      chrome.debugger.sendCommand({ tabId: tab.id }, 'Page.getLayoutMetrics', {}, (metrics) => {
        // スクリーンショットパラメータ作成
        const params = {
          format: 'png',
          quality: 50,
          clip: {
            x: 0,
            y: 0,
            width:  metrics.cssContentSize.width,
            height: metrics.cssContentSize.height,
            scale: 1
          },
          captureBeyondViewport: true
        }
  
        // スクリーンショット撮影
        chrome.debugger.sendCommand({ tabId: tab.id }, 'Page.captureScreenshot', params, (result) => {
          // 画像保存
          const downloadEle = document.createElement('a');
          downloadEle.href = 'data:image/png;base64,' + result.data;
          downloadEle.download = 'screenshot.png';
          downloadEle.click()
  
          // デバッガでタッチ
          chrome.debugger.detach({ tabId: tab.id }, () => {
            console.log('detach ok')
          });
        });
      });
    });
  });
