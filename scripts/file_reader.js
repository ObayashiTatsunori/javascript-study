window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("file").addEventListener('change', function(e) {
        //選択されたファイルを取得する（単一選択なので、０で決め打ち）
        var input = document.getElementById("file").files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById("result").textContent = reader.result;
        }, true);
        reader.readAsText(input, 'UTF-8');
    }, true);
});