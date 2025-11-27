$(document).ready(function(){
    // Click product to highlight
    $('.product').click(function(){
        $(this).css('background-color','#d1f7d1');
    });

    // Hover to show details
    $('.product').hover(
        function(){ $(this).append('<p class="details">More info here</p>'); },
        function(){ $(this).find('.details').remove(); }
    );

    // Favorite toggle
    $('.favorite').click(function(){
        $(this).toggleClass('selected');
    });

    // Style discounted products
    $('.product[data-discount="yes"]').css('border','2px solid orange');

    // Alert if out of stock
    $('.product[data-stock="out"]').click(function(){
        alert('This product is out of stock!');
    });
});
