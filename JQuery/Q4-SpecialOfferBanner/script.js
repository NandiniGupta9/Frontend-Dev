$(document).ready(function(){
    $('#hide').click(()=> $('.banner').hide());
    $('#show').click(()=> $('.banner').show());
    $('#slide').click(()=> $('.banner').slideToggle());
    $('#fade').click(()=> $('.banner').fadeToggle());

    // Automatic rotation every 5 seconds
    let index = 0;
    const banners = $('.banner');
    setInterval(()=>{
        banners.fadeOut();
        $(banners[index]).fadeIn();
        index = (index + 1) % banners.length;
    }, 5000);
});
