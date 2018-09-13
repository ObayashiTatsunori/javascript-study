document.addEventListener('DOMContentLoaded', function() {
    //送信ボタンクリック時の動作を設定
    document.getElementById('btn').addEventListener('click', function() {
        var result = [];
        var foods = document.getElementsByName('food');
        //チェックボックス内のチェック状態を確認
        for (var i = 0, len = foods.length; i < len; i++) {
            var food = foods.item(i);
            //チェックされていれば、配列に追加
            if (food.checked) {
                result.push(food.value);
            }
        }
        //配列内容を画面に表示する
        window.alert(result.toString());
    }, false);
}, false);