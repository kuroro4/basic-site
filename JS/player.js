// YouTube Player APIの読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Playerの設定
var yt = [];
function onYouTubeIframeAPIReady() {
    // 描画サイズ
    let w = '100%';
    let h = '100%';
    // 各YouTubeのIDを指定
    yt['player1'] = new YT.Player('player1', {
        width: w,
        height: h,
        videoId: 'AEzIgDMaoiU',
        events: {
            'onReady': onPlayerReady,
        },
    });
    yt['player2'] = new YT.Player('player2', {
        width: w,
        height: h,
        videoId: 'qL1IHDM3XQk',
    });
    yt['player3'] = new YT.Player('player3', {
        width: w,
        height: h,
        videoId: '_0GzTdr-EYs',
    });
    yt['player4'] = new YT.Player('player4', {
        width: w,
        height: h,
        videoId: '5z223SxlAcA',
    });
}
// 準備完了時の設定
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}
// Swiperの設定
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Playerの一時停止
swiper.on('transitionStart', function(){
    yt['player1'].pauseVideo();
    yt['player2'].pauseVideo();
    yt['player3'].pauseVideo();
    yt['player4'].pauseVideo();
});
// 切り替え時の処理
swiper.on('transitionEnd', function(){

    var index = this.realIndex;
    var slide = document.getElementsByClassName('swiper-slide')[index];
    var slideVideo = slide.getElementsByTagName('iframe')[0];
    var slideVideoId = slideVideo.getAttribute('id');

    if(slideVideo != null || slideVideo != undefined){
        yt[slideVideoId].mute();
        yt[slideVideoId].playVideo();
    }
});
