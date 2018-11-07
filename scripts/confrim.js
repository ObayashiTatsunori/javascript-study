document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fm').addEventListener('submit', function(e) {
        if (!window.confirm('ページを送信してもいいですか？')) {
            e.preventDefault();
        }
    }, false)
}, false);