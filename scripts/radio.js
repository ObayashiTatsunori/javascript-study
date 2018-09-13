var getRadioValue = function(name) {
    var result = '';
    var foods = document.getElementsByName(name);
    for (var i = 0, len = foods.length; i < len; i++) {
        var food = foods.item(i);
        if (food.checked) {
            result = food.value;
            break;
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    //送信ボタンクリック時の動作を設定
    document.getElementById('btn').addEventListener('click', function() {
        var result = getRadioValue("food");
        //配列内容を画面に表示する
        window.alert(result.toString());
    }, false);
}, false);