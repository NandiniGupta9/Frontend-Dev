$(document).ready(function(){
    $('#addPost').click(function(){
        $('#posts').append('<div class="post">New Post</div>');
    });

    $('#prependPost').click(function(){
        $('#posts').prepend('<div class="post">Featured Post</div>');
    });

    $('#removeLast').click(function(){
        $('#posts .post').last().remove();
    });

    // Highlight posts containing keyword
    $('#posts .post').each(function(){
        if($(this).text().includes('Post 1')) $(this).addClass('highlight');
    });
});
