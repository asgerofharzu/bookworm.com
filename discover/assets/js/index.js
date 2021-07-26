
var keyChecker=window.localStorage.getItem('keyWord');
var db=firebase.database();
db.ref(`users/${keyChecker}`).once('value',function(snapshot){
    var info=snapshot.val();
    window.userInfo=info;
    $("#firebase-name>span").html(window.userInfo.userName);
    $("#firebase-name").removeAttr('href');
})  
$("button").on('click',function(){
    window.location.href='comment.html'
})


