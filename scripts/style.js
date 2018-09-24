document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem');

    //マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'Yellow';
    }, false);
    console.log('aaaa');
    //マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    }, false);
}, false);