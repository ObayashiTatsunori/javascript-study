document.addEventListener('DOMContentLoaded', function() {
    var list = document.getElementById('list');
    var pic = document.getElementById('pic');
    var del = document.getElementById('del');
    //<ul id="list">配下をクリックしたときの処理
    list.addEventListener('click', function(e) {
        //data-isbn属性からアンカータグに紐づいたisbn値を取得
        var isbn = e.target.getAttribute('data-isbn');

        if (isbn) {
            //<img>要素を生成
            var img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.innerHTML;
            img.height = 150;
            img.width = 108;
            //<div>要素は以下に<img>要素が存在するか（画像表示中か）確認する
            if (pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                //<img>要素が存在しない場合は、新規に追加し「削除」ボタンを有効にする
                del.disabled = false;
                pic.appendChild(img);
            }
        }
    }, false);
    //「削除」ボタンが押されたときの処理
    del.addEventListener('click', function() {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    }, false);
}, false);