$(function(){
    var keyChecker=window.localStorage.getItem('keyWord');
    if (!keyChecker) {
        window.location.href='../singup.html';
        return;
    }
    var db=firebase.database();
    db.ref(`users/${keyChecker}`).once('value',function(snapshot){
        var info=snapshot.val();
        if (!info) {
            window.location.href='../singup.html';
            return;
        }
        $("#firebase-name>span").html(info.userName);
        $("#firebase-name").removeAttr('href');
    })

})