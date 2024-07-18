let display_value='';
$(".numpad div").on("click",function(){

    $('.numpad div').on('click', function() {
        var $this = $(this);
        $this.addClass("animate");
        setTimeout(function() {
            $this.removeClass("animate");
        }, 100);
    });
    
    var n=$(this).text();
    if ($(this).text()=='sq')
    {
       display_value=(display_value*display_value);
       $(".text1").text(display_value);
       display_value.slice(0,-2);
    }
    if($(this).text()=='√')
    {
        display_value=Math.sqrt(display_value);
       $(".text1").text(display_value);
       display_value.slice(0,-1);
    }
    if($(this).text()=='ln')
    {
        display_value=Math.log(display_value);
        $(".text1").text(display_value);
        display_value.slice(0,-2);
    }
    if($(this).text()=='log')
    {
        display_value=Math.log10(display_value);
        $(".text1").text(display_value);
        display_value.slice(0,-3);
    }
    if($(this).text()=='=')
    {
        var result=eval(display_value);
        $(".text1").text(result);
    }
    else{
        if($(this).text()=="del")
            {
                display_value=display_value.slice(0,-1);
                $(".text1").text(display_value);
            }
            else{
                display_value+=n;
                $(".display h1").text(display_value);
            }
    }
    if($(this).text()=="AC")
        {
            display_value='';
            $(".text1").text("0");
        }  
});



