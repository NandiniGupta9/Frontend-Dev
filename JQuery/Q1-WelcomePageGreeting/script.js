$(document).ready(function(){
    // 1. Display greeting based on time
    let hour = new Date().getHours();
    if(hour < 12) $('#greeting').text('Good Morning!');
    else if(hour < 18) $('#greeting').text('Good Afternoon!');
    else $('#greeting').text('Good Evening!');

    // 2. Change greeting on button click
    $('#changeGreeting').click(function(){
        $('#greeting').text('Believe in yourself! Every day is a new opportunity.');
    });

    // 3. Toggle welcome message
    $('#toggleMessage').click(function(){
        $('#welcomeMessage').toggle();
    });

    // 4. Show alert on greeting click
    $('#greeting').click(function(){
        alert('Greeting clicked!');
    });
});
