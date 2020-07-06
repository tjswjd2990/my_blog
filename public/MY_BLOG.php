<?php 
include_once "../part/head.php"
?>
<h1 class="con">my blog</h1>
<?php
$dbConn = mysqli_connect("site11.blog.oa.gg", "site11", "sbs123414", "site11", 3306) or die("DB CONNECTION ERROR");

$cateItemId = $_GET['cateItemId'];  /*주소창에서 물음표 뒤에 cateItemId=1을 붙이면 1을 가져온다*/
/*$_GET은 cateItemId에 입력한 값에 따라 각각 다른 결과를 보여주는 역할을 해줌*/

$sql = "
SELECT *
FROM cateItem
WHERE id = {$cateItemId}
";
/*{$cateItemId} 자리에 그냥 1이나 2를 넣으면 1이랑 2밖에 안나오기 때문에 다양한 값이 들어갈 수 있도록 {$cateItemId}라고 입력해 뭉뚱그려 사용*/

$rs = mysqli_query($dbConn, $sql);  /*$dbConn과 $sql을 가져와서 실행시킨 결과를 압축시키는 것*/
$row = mysqli_fetch_assoc($rs);
$cateItemName = $row['name'];

$sql2 = "
SELECT *
FROM article
WHERE cateItemId = {$cateItemId}
ORDER BY id DESC
";

$rs2 = mysqli_query($dbConn, $sql2);

$articleRows = [];

while ( true ) {
    $row2 = mysqli_fetch_assoc($rs2);

    if ( $row2 == null ) {
        break;
    }

    $articleRows[] = $row2;
}

?>

<h1>카테고리 : <?=$cateItemName?></h1>
<?php foreach ( $articleRows as $article ) { ?>
<div>
    <a href="./detail.php?id=<?=$article['id']?>">번호 : <?=$article['id']?>, 제목 : <?=$article['title']?>, 작성날짜 : <?=$article['regDate']?></a>
</div>
<?php } ?>

<?php
include "../part/foot.php";
?>