<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.19/jquery.scrollify.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>

    <title>민정 ezwell</title>
</head>

<body>
<!--탑바 시작-->
<section class="header">
<div class="top-bar flex flex-jc-c">
    <nav class="menu-box-1 flex flex-ai-c flex-1-0-0">
        <ul class="flex height-100p">
            <li><a href="#" class="height-100p flex flex-ai-c">COMPANY</a>
<!--html에서는 모든것의 높이가 최소화 되기 때문에 따로 다 높이를 설정해야함. 하지만 flex의 자식에게는 height-100p를 굳이 줄 필요가 없다. 즉 flex의 자식이 아닌 상태에서 박스를 꽉 채워지게 키우고 싶다면 height를 줘야한다. 당사자가 flex인건 아무 상관이 없다. 현재 top-bar에게 높이를 부여했고, menu-box-1은 flex인 top-bar의 높이를 그대로 물려받고, ul은 부모인 nav가 flex-ai-c상태이기 때문에 크기가 완전축소 되어버려서 수동적으로 높이를 설정해야한다. li는 flex인 ul의 자식이어서 높이를 맞출 필요가 없고 a는 ul의 자식이 아니기 때문에 높이를 따로 설정한다.-->
<!--align-ceter나 align-item은 박스크기가 최소화 되어버리기 때문에 같은 flex여도 자식의 높이를 따로 설정해주어야 한다. 원래 로고를 집어넣으면 그에 맞게 다른 요소들(메뉴박스등)의 높이도 같이 부풀어야 맞지만 이지웰탑바의 경우 로고가 '메뉴박스의 자식'으로 설정되어있기 때문에(무조건 '부모'여야 따라서 높이가 부여됨) 이렇게 일일이 높이를 주는 일이 발생한 것-->
                <ul>
                    <li><a>비전</a></li>
                    <li><a href="#">연혁</a></li>
                    <li><a href="#">기업문화</a></li>
                    <li><a href="#">복지제도</a></li>
                    <li><a href="#">오시는길</a></li>
                </ul>
            </li>
            <li><a href="#" class="height-100p flex flex-ai-c">BUSINESS</a>
                <ul>
                    <li><a href="#">기업 복지서비스</a></li>
                    <li><a href="#">파트너 복지서비스</a></li>
                    <li><a href="#">공공 복지서비스</a></li>
                </ul>
            </li>
            <li><a href="#" class="height-100p flex flex-ai-c">IR</a>
                <ul>
                    <li><a href="#">주가정보</a></li>
                    <li><a href="#">재무정보</a></li>
                    <li><a href="#">공시</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </li>
            <li><a href="#" class="height-100p flex flex-ai-c">CSR</a>
                <ul>
                    <li><a href="#">사회공헌이념</a></li>
                    <li><a href="#">사회공헌활동</a></li>
                    <li><a href="#">이지웰가족복지재단</a></li>
                </ul>
            </li>
            <li><a href="#" class="height-100p flex flex-ai-c">SUPPORT</a>
                <ul>
                    <li><a href="#">서비스문의</a></li>
                    <li><a href="#">앱다운로드</a></li>
                    <li><a href="#">윤리제보</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div class="logo img-box flex-1-0-0">
    </div>
    <div class="flex flex-1-0-0"></div>
<!--nav접으면 nav의 동생div가 두개나옴, 그중에 첫번째 div를 order:-1을 통해 앞으로 보낼 예정. 이게 나중에 로고가 된다.-->
<!--flex-1-0-0은 top-bar에 한꺼번에 주는게 아니라 각각에 설정해야되는가?-->
</div>
</section>
<!--탑바 끝-->

<!--메인 슬라이드 시작-->
<section class="panel home" data-section-name="home">
    <div class="inner">
  <!-- Swiper -->
  <div class="swiper-container main-slider-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide main-slide" style="background-image:url(https://tjswjd2990.github.io/img1/pf/ezwell/main-slider-img01.jpg)"></div>
      <div class="swiper-slide main-slide" style="background-image:url(https://tjswjd2990.github.io/img1/pf/ezwell/main-slider-img02.jpg)"></div>
      <div class="swiper-slide main-slide" style="background-image:url(https://tjswjd2990.github.io/img1/pf/ezwell/main-slider-img03.jpg)"></div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <div class="swiper-pagination"></div>
  </div>        
    </div>
</section>
<!--메인 슬라이드 끝-->

<section class="panel panel1" data-section-name="second">
    <div class="inner">
        내용2
    </div>
</section>
<section class="panel panel2" data-section-name="third">
    <div class="inner">
        내용3
    </div>
</section>
<section class="panel panel3" data-section-name="fourth">
    <div class="inner">
        내용4
    </div>
</section>

<section class="footer">푸터</section>

</body>

</html>