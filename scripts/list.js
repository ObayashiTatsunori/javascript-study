document.addEventListener('DOMContentLoaded', function() {
    var getSelectValue = function(name) {
            //選択値を格納するための配列
            var result = [];
            var opts = document.getElementById(name).options;
            //<oprion>要素のチェック状態を確認する
            for (var i = 0, len = opts.length; i < len; i++) {
                var opt = opts.item(i);
                if (opt.selected) {
                    result.push(opt.value);
                }
            }
            return result;
        }
        //ボタンクリック時に選択項目の値をダイアログに表示する
    document.getElementById('btn').addEventListener('click', function() {
        window.alert(getSelectValue('food'));
    }, false);
}, false);