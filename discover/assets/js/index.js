let btn = document.querySelectorAll("button");
btn.onclick = function(){
    
}
var keyChecker=window.localStorage.getItem('keyWord');
      var db=firebase.database();
      db.ref(`users/${keyChecker}`).once('value',function(snapshot){
          var info=snapshot.val();
          window.userInfo=info;
          $("#firebase-name>span").html(window.userInfo.userName);
          $("#firebase-name").removeAttr('href');
      })