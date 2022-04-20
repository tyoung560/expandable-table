$(document).ready(function() {    
    //hides articles
    $(".expandable-row").hide();  
    //article accordian
    $(".show-details").click(function() {
        $(this).parent().siblings(".expandable-row").slideToggle("slow");
    });
});
