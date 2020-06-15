function closeAd(){
  setInterval(function () {
    let closeBtn = document.querySelector('.ytp-ad-overlay-close-button')
    let skipBtn = document.querySelector('.ytp-ad-skip-button')
    if(closeBtn){
      closeBtn.click();
    }
    if(skipBtn){
      skipBtn.click();
    }
  }, 3000)
}
closeAd();
