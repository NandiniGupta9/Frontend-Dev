var jq1 = $.noConflict(true); // version 1
var jq2 = jQuery.noConflict(); // version 2

jq1(document).ready(function(){
    jq1('#carousel').text('Carousel v1 active');
    jq1('#widget').addClass('active');
});

jq2(document).ready(function(){
    jq2('#widget2').attr('title','Tooltip v2');
});
