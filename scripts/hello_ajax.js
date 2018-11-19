document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('loadstart', function() {
            result.textContent = '通信中・・・';
        }, false);
        xhr.addEventListener('load', function() {
            result.textContent = xhr.responseText;
        }, false);
        xhr.addEventListener('error', function() {
            result.textContent　 = 'サーバーエラーが発生しました'
        }, false)


        //サーバーとの非同期処理を開始
        xhr.open('POST', 'hello_ajax.php', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        xhr.send('name=' + encodeURLComponent(document.getElementById('name').value));

        xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);
    }, false);
}, false);