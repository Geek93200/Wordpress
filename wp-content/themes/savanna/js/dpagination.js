var busy=false;
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()>300){
        jQuery('#scrollUp').stop().animate({opacity:0.05},400)
    } else {
        jQuery('#scrollUp').stop().animate({opacity:0.00},400)
    }
    if(jQuery(window).scrollTop()+jQuery(window).height()>jQuery('#main_content').offset().top+jQuery('#main_content').height()-50&&!busy){
        busy=true;
        link=jQuery('.pagination .nextpage').attr('href');
        if(typeof link!='undefined'){
            var params='smt_layout='+jQuery('body').attr('layout')+'&ajaxpage=1';
            jQuery.ajax({
                type:"POST",
                cache:false,
                async:false,
                data:params,
                url:link,
                dataType:'json',
                success:function(data){
                    if(data!=""){
                        jQuery('.pagination .nextpage').parent().append('<span class="thispage">Page '+jQuery('.pagination .nextpage').attr('alt')+'</span>');
                        jQuery('.pagination .nextpage').remove();
                        jQuery("#main_content").append(data['content']);
                        busy=false
                    }
                }
            })
        }
    }
});

jQuery(document).on('mouseenter', '#scrollUp', function(){
    jQuery(this).stop().animate({opacity:0.1},"slow")
})
jQuery(document).on('mouseout', '#scrollUp', function(){
    if(jQuery(window).scrollTop()>300)
        var o=0.05;
    else 
        var o=0.00;
    jQuery(this).stop().animate({opacity:o},"slow")
});
jQuery(document).on('click','#scrollUp',function(){jQuery('html, body').animate({scrollTop: 0}, 1200);});