document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    var result = document.getElementById('result');
    //カウントアップボタンをクリックしたときに履歴を追加
    document.getElementById('btn').addEventListener('click', function() {
        result.textContent = ++count;
        history.pushState(count, null, '/js/cap07/count/' + count);
    });

    //戻るボタンでページの状態を前に戻す
    window.addEventListener('popstate', function(e) {
        count = e.state;
        result.textContent = count;
    });
});