var keyChecker=window.localStorage.getItem('keyWord');
var db=firebase.database();
db.ref(`users/${keyChecker}`).once('value',function(snapshot){
      var info=snapshot.val();
      window.userInfo=info;
      $("#firebase-name>span").html(window.userInfo.userName);
      $("#firebase-name").removeAttr('href');
})

for(let i=0;i<$("input.mr-2").length;i++){
  $("input.mr-2").eq(i).attr("id",`input${i}`);
  $("button.my-4").eq(i).attr("id",`add${i}`);
}



$.ajax({
  url:`https://www.googleapis.com/books/v1/volumes?q=sherlock`,
  method:"GET"
}).done(function(response){
  
   console.log(response);
   for(let i=0;i<$(".align-self-center").length;i++){
      $(".align-self-center").eq(i).attr("src",response.items[i].volumeInfo.imageLinks.thumbnail);
      $(".list-comments").eq(i).attr("id",response.items[i].id);
   }
   var keyChecker=window.localStorage.getItem('keyWord');
   var db=firebase.database();
   var info=null;
   db.ref(`users/${keyChecker}`).on('value',function(snapshot){
         info=snapshot.val();
         for(let i=0;i<$(".user-name").length;i++){
            $(".user-name").eq(i).html(info.userName);
         }
   })
   document.getElementById("add1").addEventListener("click", postChat1);
    function postChat1(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const chatTxt = document.getElementById("input1");
      const message = chatTxt.value;
      chatTxt.value = "";
      db.ref("messages/" +response.items[0].id+"/"+ timestamp).set({
        usr: info.userName,
        msg: message,
      });
    }
   const fetchChat1 = db.ref("messages/"+response.items[0].id);
   fetchChat1.on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
        document.getElementById(response.items[0].id).innerHTML += msg;
    });
   document.getElementById("add2").addEventListener("click", postChat2);
    function postChat2(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const chatTxt = document.getElementById("input2");
      const message = chatTxt.value;
      chatTxt.value = "";
      db.ref("messages/" +response.items[1].id+"/"+ timestamp).set({
        usr: info.userName,
        msg: message,
      });
    }
   const fetchChat2 = db.ref("messages/"+response.items[1].id);
   fetchChat2.on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
        document.getElementById(response.items[1].id).innerHTML += msg;
    });
   document.getElementById("add3").addEventListener("click", postChat3);
    function postChat3(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const chatTxt = document.getElementById("input3");
      const message = chatTxt.value;
      chatTxt.value = "";
      db.ref("messages/" +response.items[2].id+"/"+ timestamp).set({
        usr: info.userName,
        msg: message,
      });
    }
   const fetchChat3 = db.ref("messages/"+response.items[2].id);
   fetchChat3.on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
        document.getElementById(response.items[2].id).innerHTML += msg;
    });
    document.getElementById("add4").addEventListener("click", postChat4);
    function postChat4(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const chatTxt = document.getElementById("input4");
      const message = chatTxt.value;
      chatTxt.value = "";
      db.ref("messages/" +response.items[3].id+"/"+ timestamp).set({
        usr: info.userName,
        msg: message,
      });
    }
   const fetchChat4 = db.ref("messages/"+response.items[3].id);
   fetchChat4.on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
        document.getElementById(response.items[3].id).innerHTML += msg;
    });
    document.getElementById("add5").addEventListener("click", postChat5);
    function postChat5(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const chatTxt = document.getElementById("input5");
      const message = chatTxt.value;
      chatTxt.value = "";
      db.ref("messages/" +response.items[4].id+"/"+ timestamp).set({
        usr: info.userName,
        msg: message,
      });
      console.log($("#input5"));
    }
   const fetchChat5 = db.ref("messages/"+response.items[4].id);
   fetchChat5.on("child_added", function (snapshot) {
        const messages = snapshot.val();
        const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
        document.getElementById(response.items[4].id).innerHTML += msg;
    });
})  

$("#add0").on("click",function(){
  $.ajax({
    url:`https://www.googleapis.com/books/v1/volumes?q=${$("#input0").val()}`,
    method:"GET"
  }).done(function(response){
     console.log(response);
     console.log($("#input0").val());
     $("#input0").val(" ")
     
     for(let i=0;i<$(".align-self-center").length;i++){
        $(".align-self-center").eq(i).attr("src",response.items[i].volumeInfo.imageLinks.thumbnail);
        $(".list-comments").eq(i).attr("id",response.items[i].id);
     }
     var keyChecker=window.localStorage.getItem('keyWord');
     var db=firebase.database();
     var info=null;
     db.ref(`users/${keyChecker}`).on('value',function(snapshot){
           info=snapshot.val();
           for(let i=0;i<$(".user-name").length;i++){
              $(".user-name").eq(i).html(info.userName);
           }
     })
     document.getElementById("add1").addEventListener("click", postChat1);
      function postChat1(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const chatTxt = document.getElementById("input1");
        const message = chatTxt.value;
        chatTxt.value = "";
        db.ref("messages/" +response.items[0].id+"/"+ timestamp).set({
          usr: info.userName,
          msg: message
        });
      }
     const fetchChat1 = db.ref("messages/"+response.items[0].id);
     fetchChat1.on("child_added", function (snapshot) {
          const messages = snapshot.val();
          const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
          document.getElementById(response.items[0].id).innerHTML += msg;
      });
     document.getElementById("add2").addEventListener("click", postChat2);
      function postChat2(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const chatTxt = document.getElementById("input2");
        const message = chatTxt.value;
        chatTxt.value = "";
        db.ref("messages/" +response.items[1].id+"/"+ timestamp).set({
          usr: info.userName,
          msg: message
        });
      }
     const fetchChat2 = db.ref("messages/"+response.items[1].id);
     fetchChat2.on("child_added", function (snapshot) {
          const messages = snapshot.val();
          const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
          document.getElementById(response.items[1].id).innerHTML += msg;
      });
     document.getElementById("add3").addEventListener("click", postChat3);
      function postChat3(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const chatTxt = document.getElementById("input3");
        const message = chatTxt.value;
        chatTxt.value = "";
        db.ref("messages/" +response.items[2].id+"/"+ timestamp).set({
          usr: info.userName,
          msg: message
        });
      }
     const fetchChat3 = db.ref("messages/"+response.items[2].id);
     fetchChat3.on("child_added", function (snapshot) {
          const messages = snapshot.val();
          const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
          document.getElementById(response.items[2].id).innerHTML += msg;
      });
      document.getElementById("add4").addEventListener("click", postChat4);
      function postChat4(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const chatTxt = document.getElementById("input4");
        const message = chatTxt.value;
        chatTxt.value = "";
        db.ref("messages/" +response.items[3].id+"/"+ timestamp).set({
          usr: info.userName,
          msg: message
        });
      }
     const fetchChat4 = db.ref("messages/"+response.items[3].id);
     fetchChat4.on("child_added", function (snapshot) {
          const messages = snapshot.val();
          const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
          document.getElementById(response.items[3].id).innerHTML += msg;
      });
      document.getElementById("add5").addEventListener("click", postChat5);
      function postChat5(e) {
        e.preventDefault();
        const timestamp = Date.now();
        const chatTxt = document.getElementById("input5");
        const message = chatTxt.value;
        chatTxt.value = "";
        db.ref("messages/" +response.items[4].id+"/"+ timestamp).set({
          usr: info.userName,
          msg: message
        });
      }
     const fetchChat5 = db.ref("messages/"+response.items[4].id);
     fetchChat5.on("child_added", function (snapshot) {
          const messages = snapshot.val();
          const msg = "<li><i class='fas fa-user-circle mr-1'></i> " + messages.usr + ":" + messages.msg + "</li>";
          // document.getElementById(response.items[4].id).innerHTML += msg;
          $("#"+response.items[4].id).append(msg);
      });
  })  
  
})


// db.ref('comments/first').on('value',function(snapshot) {
//     comments=snapshot.val();

// })


// document.getElementById("send-message").addEventListener("submit", postChat1);
// function postChat1(e) {
//   e.preventDefault();
//   const timestamp = Date.now();
//   const chatTxt = document.getElementById("chat-txt");
//   const message = chatTxt.value;
//   chatTxt.value = "";
//   db.ref("messages/" + timestamp).set({
//     usr: info.userName,
//     msg: message,
//   });
// }
//  const fetchChat1 = db.ref("messages/"+response.items[i].id);
// fetchChat1.on("child_added", function (snapshot) {
//   const messages = snapshot.val();
//   const msg = "<li class='jumbotron'><i class='fas fa-user-circle mr-1'></i> " + messages.usr + "<p>" + messages.msg +"</p>"+ "</li>";
//   console.log(msg);
//   document.getElementById("messages").innerHTML += msg;
// });

//#region First
// document.getElementById("").addEventListener("submit", postChat1);
// function postChat1(e) {
//   e.preventDefault();
//   const timestamp = Date.now();
//   const chatTxt = document.getElementById("chat-txt");
//   const message = chatTxt.value;
//   chatTxt.value = "";
//   db.ref("messages/" + timestamp).set({
//     usr: info.userName,
//     msg: message,
//   });
// }
// const fetchChat1 = db.ref("messages/");
// fetchChat1.on("child_added", function (snapshot) {
//   const messages = snapshot.val();
//   const msg = "<li class='jumbotron'><i class='fas fa-user-circle mr-1'></i> " + messages.usr + "<p>" + messages.msg +"</p>"+ "</li>";
//   console.log(msg);
//   document.getElementById("messages").innerHTML += msg;
// });



//#endregion







// $("#comment-btn0").on('click',()=>{

//     comment=$("#formGroupExampleInput").val().trim();



