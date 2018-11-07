document.addEventListener('DOMContentLoaded', function() {
    //タイマーを設置
    var timer = window.setTimeout(
        //現在の時刻をresult要素に表示（5000ミリ秒ごとに更新する）
        function() {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 5000);
    //ボタンクリック時にタイマーを停止する
    document.getElementById('btn').addEventListener('click', function() {
        window.clearInterval(timer);
    }, false);
}, false);