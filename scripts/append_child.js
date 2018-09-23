document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        //テキストボックスを取得
        var name = document.getElementById('name');
        var url = document.getElementById('url');

        //<a>要素を生成
        var anchor = document.createElement('a');
        //<a>要素のhref属性を設定
        anchor.href = url.value;
        //テキストノードを生成し、<a>要素の直下に追加
        var text = document.createTextNode(name.value);
        anchor.appendChild(text);
        //<br>要素を生成
        var br = document.createElement('br');
        //<div id='list'>を取得
        var list = document.getElementById('list');
        //<div>要素の直下に<a><br>を追加
        list.appendChild(anchor);
        list.appendChild(br);
    }, false);
}, false)