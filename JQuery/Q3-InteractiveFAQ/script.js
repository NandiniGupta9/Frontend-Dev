$(document).ready(function(){
    // Toggle answer visibility
    $('.question').click(function(){
        $(this).next('.answer').toggle();
    });

    // Change question color on hover
    $('.question').hover(
        function(){ $(this).css('color','blue'); },
        function(){ $(this).css('color','black'); }
    );

    // Double click to collapse all
    $('.question').dblclick(function(){
        $('.answer').hide();
    });

    // Focus on input highlight parent question
    $('input').focus(function(){
        $(this).parent().find('.question').css('background-color','yellow');
    });

    // Blur resets background
    $('input').blur(function(){
        $(this).parent().find('.question').css('background-color','');
    });
});
