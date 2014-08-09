$('#sidebox .tab').toggle(function(){
    $('#sidebox').animate({'bottom':0});
}, function(){
    $('#sidebox').animate({'bottom':-$('#sidebox_content').height()});
});