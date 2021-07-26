$(function(){
    var comment=null;
    $("#comment").on('click',()=>{
        comment=$("#text").val().trim();
        if (!comment) {
           $(".error-text").html("Please fill this area");
           $(".error-text").css({
               'color':'#F00',
               'textAlign':'center'
           })
        }else{
            $(".error-text").css({
                'display':'none'
            });
            var keyChecker=window.localStorage.getItem('keyWord');
            var db=firebase.database();
            db.ref(`users/${keyChecker}`).once('value',function(snapshot){
                var info=snapshot.val();
                window.userInfo=info;
                $(".users-comments").append(`<div class=jumbotron >
                    <div class='user-comment'>${window.userInfo.userName}</div>
                    <div class='user-comment'>${comment}</div>
                </div>`);
            })
            
            
        }
    })





   



})