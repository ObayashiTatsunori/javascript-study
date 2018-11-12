<form method="POST" action="hello.php">
  <label for="name">名前：</label>
  <input type="text" name="name" size="15" />
  <input type="submit" name="submit" value="送信" />
</form>
<?php
if($_REQUEST['submit']!==null){
  sleep(3);
  print('こんにちは、'.htmlspecialchars($_POST['name'],ENT_QUOTES | ENT_HTML5,'UTF-8').'さん！');
}
?>