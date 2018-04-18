$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$('.navAgenda').click(function(){
    $('.agenda').fadeToggle('slow');
});

 $('.testebutton').click(function() {
            $('body').load('system.html');
        });