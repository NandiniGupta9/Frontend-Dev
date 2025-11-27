$(document).ready(function(){
    // Click manager highlights direct reports
    $('.manager').click(function(){
        $(this).siblings('.employee').addClass('highlight');
    });

    // Hover employee to show contact
    $('.employee').hover(
        function(){ $(this).after('<span class="contact"> (contact info)</span>'); },
        function(){ $(this).siblings('.contact').remove(); }
    );

    // Click department to highlight all members
    $('.department').click(function(){
        $(this).children('.employee').css('background-color','#f0f0f0');
    });

    // Random employee highlights siblings
    $('#randomEmp').click(function(){
        let random = $('.employee').eq(Math.floor(Math.random()*$('.employee').length));
        random.siblings('.employee').addClass('highlight');
    });

    // Collapse/expand team
    $('#toggleTeam').click(function(){
        $('.department').children('.employee').toggle();
    });
});
