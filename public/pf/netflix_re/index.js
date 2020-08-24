$(function() {
    new fullpage('#fullpage', {
        menu: '#menu',
        verticalCentered:false,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'],
        navigationTooltips: ['First page', 'Second page', 'Third and last page', 'ff', 'ff']
    });
});