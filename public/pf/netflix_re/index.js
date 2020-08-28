$(function() {
    new fullpage('#fullpage', {
        menu: '#menu',
        verticalCentered:false,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
        navigationTooltips: ['main', 'device', 'original netflix', 'Last page']
    });
});

function Active_Show(){
    $('.unlimited').addClass('active');
    $('.main_logo').addClass('active');
    $('.free').addClass('active');
    $('.second > .device').addClass('active');
    $('.second > .first-text').addClass('active');
    $('.second > .second-text').addClass('active');
    $('.second > .third-text').addClass('active');
    $('.second > .forth-text').addClass('active');
    $('.second > .small-free').addClass('active');
    $('.third > .original-n').addClass('active');
    $('.third > .original-e').addClass('active');
    $('.third > .original-t').addClass('active');
    $('.third > .original-f').addClass('active');
    $('.third > .original-l').addClass('active');
    $('.third > .original-i').addClass('active');
    $('.third > .original-x').addClass('active');
    $('.third > .original').addClass('active');
    $('.third > .ex1').addClass('active');
    $('.third > .ex2').addClass('active');
    $('.third > .ex3').addClass('active');
    $('.third > .ex4').addClass('active');
    $('.third > .small-free').addClass('active');
    $('.forth > .mobile').addClass('active');
    $('.forth > .forth-netflix').addClass('active');
    $('.forth > .forth-free').addClass('active');
  }
  
  
  $(function(){
    Active_Show();
  })