$(document).ready(function(){
    $('#subscribe').click(()=> alert('Notifications Enabled'));
    $('#unsubscribe').click(()=> alert('Notifications Disabled'));

    // Dynamically add topics
    $('#addTopic').click(function(){
        $('#topics').append('<div class="topic">New Topic</div>');
    });

    // Remove last topic
    $('#removeTopic').click(function(){
        $('#topics .topic').last().remove();
    });

    // Attach click using .on()
    $('#topics').on('click', '.topic', function(){
        $(this).toggleClass('highlight');
    });
});
