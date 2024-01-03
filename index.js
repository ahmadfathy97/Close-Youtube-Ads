function closeAd(){
  setInterval(function () {
    let closeBtn = document.querySelector('.ytp-ad-overlay-close-button-modern')
    let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
    if(closeBtn){
      closeBtn.click();
    }
    if(skipBtn){
      skipBtn.click();
    }
  }, 3000)
}
closeAd();
