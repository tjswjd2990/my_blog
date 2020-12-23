$(function () {
  new fullpage('#fullpage', {
    menu: '#menu',
    verticalCentered: false,
    navigation: true,
    navigationPosition: 'right',
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
    navigationTooltips: ['main', 'device', 'original netflix', 'Last page']
  });
});