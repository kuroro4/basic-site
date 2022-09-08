window.onload=function(){
    function Animation() {
    //アイコン位置取得
    let pageTop = document.getElementById('page_top');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if (scrollTop > 420) {
      pageTop.classList.add('show');
    } else {
      pageTop.classList.remove('show');
    }
  }
      window.addEventListener('scroll', Animation);
 }
