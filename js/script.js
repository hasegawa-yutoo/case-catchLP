$(function() {
    var $header = $('#top-head');
    // Nav Toggle Button
    $('#nav-toggle').click(function() {
        $header.toggleClass('open');
        $('.header-navi-shadow').toggleClass('black-shadow');
    });
});