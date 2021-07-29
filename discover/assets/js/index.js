var keyChecker=window.localStorage.getItem('keyWord');
var db=firebase.database();
db.ref(`users/${keyChecker}`).once('value',function(snapshot){
    var info=snapshot.val();
    window.userInfo=info;
    $("#firebase-name>span").html(window.userInfo.userName);
    $("#firebase-name").removeAttr('href');
})  

var db=firebase.database();
var comments=null;


for(let i=0;i<$(".count").length;i++){
    $(".count").eq(i).attr("data-target",`#img${i}`);
    var modal=` <div class="modal fade" id="img${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Comments</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body row">
            <div class="card col-lg-5 col-12" style="width: 18rem;">
              <img class="card-img-top mt-2 mb-2" src="" alt="Card image cap">
                <ul class="users-comments" id="messages-t${i}" style="overflow: auto; height: 500px;">
                    <li class="jumbotron ">
                        <div>
                        <i class="fas fa-user-circle mr-1"></i><span class="user-name font-weight-bold">John</span> 
                        </div>
                        <div class="user-comment">
                            I think this book is good,but with only o💪💪💪
                        </div>
                    </li>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
              </ul>
            </div>
            <div class="col-lg-7 col-12">
                <h2 style="color: #0E345A;" class="comment-title"></h2>
                <p style="color: #0E345A;" class="comment-description"></p>
                <h5 style="font-style: italic; color: #0E345A;" >Rating Point:<span class="comment-rating"></span>/5</h5>
            </div>
        </div>
        <div class="modal-footer d-flex flex-column">
          <div class="form-group mx-auto">
           <form id="send-message${i}" >
              <label for="formGroupExampleInput" class="font-weight-bold" style="color:#0E345A;">Enter your comment</label>
              <input type="text" id="chat-txt${i}"  class="form-control" size=160 id="formGroupExampleInput" placeholder="Please enter your comment">
           </form>
          </div>
          <p class=error-text></p>
          <button type="button" class="btn btn-primary font-weight-bold" id="comment-btn${i}" >Comment</button>
        </div>
      </div>
    </div>
    </div>`
    $('body').append(modal);
}


var comment=null;
var myComment=null;
var info=null;

var first=null;

db.ref(`users/${keyChecker}`).once('value',function(snapshot){
    info=snapshot.val();
})  

// db.ref('comments/first').on('value',function(snapshot) {
//     comments=snapshot.val();

// })


//#region First
document.getElementById("send-message0").addEventListener("submit", postChat1);
function postChat1(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt0");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: info.userName,
    msg: message,
  });
}
const fetchChat1 = db.ref("messages/");
fetchChat1.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li class='jumbotron'><i class='fas fa-user-circle mr-1'></i> " + messages.usr + "<p>" + messages.msg +"</p>"+ "</li>";
  console.log(msg);
  document.getElementById("messages-t0").innerHTML += msg;
});



//#endregion







// $("#comment-btn0").on('click',()=>{

//     comment=$("#formGroupExampleInput").val().trim();
//     if (!comment) {
//        $(".error-text").html("Please fill this area");
//        $(".error-text").css({
//            'color':'#F00',
//            'textAlign':'center'
//        })
//     }else{
//         $(".error-text").html("");
//         var keyChecker=window.localStorage.getItem('keyWord');
//         var db=firebase.database();
//         db.ref('comments/first').push({
//             comment
//         })
//         db.ref('comments/first').on('value',function(snapshot) {
//             comments=snapshot.val();

//         })
//         for(let i in comments){
//           window.localStorage.setItem('comWord',i);
//         }
//         db.ref(`comments/first/${window.localStorage.getItem('comWord')}`).once('value',function(snapshot) {
//           var com=window.localStorage.getItem('comWord');
//           myComment=snapshot.val();
//           console.log(com,myComment.comment);
//       })
//         db.ref(`users/${keyChecker}`).on('value',function(snapshot){
//             info=snapshot.val();
//             // $(".users-comments").append(`<div class=jumbotron >
//             //     <div class='user-comment'>${window.userInfo.userName}</div>
//             //     <div class='user-comment'>${comment}</div>
//             // </div>`);
//             console.log(info.userName);
//             $(".users-comments").append(`<div class="jumbotron">
//             <div>
//             <i class="fas fa-user-circle mr-1"></i><span class="user-name font-weight-bold">${info.userName}</span> 
//             </div>
//             <div class="user-comment">
//                 ${myComment.comment}
//             </div>
//           </div>`);
//         })
//         // console.log(info,info.userName);


//       //   db.ref('comments/first').on('value',function(snapshot) {
//       //      comments=snapshot.val();
//       //      console.log(comments);
//       //      console.log(Object.keys(comments));
//       //      for(let element in comments){
//       //         // window.localStorage.setItem('comWord',i);
//       //         console.log(element);
//               // $(".users-comments").append(`<div class="jumbotron">
//               //     <div>
//               //     <i class="fas fa-user-circle mr-1"></i><span class="user-name font-weight-bold">${info.userName}</span> 
//               //     </div>
//               //     <div class="user-comment">
//               //         ${comments}
//               //     </div>
//               // </div>`);

//       //       }
          
//       // })
       
        
        
//     }
// })





$.ajax({
    url:`https://www.googleapis.com/books/v1/volumes?q=${$(".form-control").val().trim()}`,
    method:"GET"
}).done(function(response){
    
    console.log(response);
    for(let i=0;i<response.items.length;i++){
        $(".author").eq(i).html(response.items[i].volumeInfo.authors);
    }
    for(let i=0;i<response.items.length;i++){
        // $(`photo-box`).append($(`<img src=${response.items[i].volumeInfo.imageLinks.smallThumbnail}>`));
        $('.photo-box').eq(i).css('background-image', 'url("' + response.items[i].volumeInfo.imageLinks.smallThumbnail + '")');
        $('.photo-box').eq(i).data("url",response.items[i].volumeInfo.imageLinks.thumbnail);
        
     }
      for(let i=0;i<$(".count").length;i++){
        $(".card-img-top").eq(i).attr("src",response.items[i].volumeInfo.imageLinks.smallThumbnail);
        $(".comment-title").eq(i).html(response.items[i].volumeInfo.title);
        $(".comment-description").eq(i).html(response.items[i].volumeInfo.description);
        $(".comment-rating").eq(i).html(response.items[i].volumeInfo.averageRating);
      }
      // items[0].volumeInfo.description
})
$("#ajax-search").on('click',function(){
    $.ajax({
        url:`https://www.googleapis.com/books/v1/volumes?q=${$(".form-control").val().trim()}`,
        method:"GET"
    }).done(function(response){
        
        console.log(response);
        for(let i=0;i<response.items.length;i++){
            // $(`photo-box`).append($(`<img src=${response.items[i].volumeInfo.imageLinks.smallThumbnail}>`));
            $('.photo-box').eq(i).css('background-image', 'url("' + response.items[i].volumeInfo.imageLinks.smallThumbnail + '")');
            $('.photo-box').eq(i).data("url",response.items[i].volumeInfo.imageLinks.smallThumbnail);
            
         }
        for(let i=0;i<response.items.length;i++){
          $(".author").eq(i).html(response.items[i].volumeInfo.authors);
        }
      for(let i=0;i<response.items.length;i++){
          // $(`photo-box`).append($(`<img src=${response.items[i].volumeInfo.imageLinks.smallThumbnail}>`));
          $('.photo-box').eq(i).css('background-image', 'url("' + response.items[i].volumeInfo.imageLinks.smallThumbnail + '")');
          $('.photo-box').eq(i).data("url",response.items[i].volumeInfo.imageLinks.thumbnail);
          
       }
        for(let i=0;i<$(".count").length;i++){
          $(".card-img-top").eq(i).attr("src",response.items[i].volumeInfo.imageLinks.smallThumbnail);
          $(".comment-title").eq(i).html(response.items[i].volumeInfo.title);
          $(".comment-description").eq(i).html(response.items[i].volumeInfo.description);
          $(".comment-rating").eq(i).html(response.items[i].volumeInfo.averageRating);
        }
    })
    console.log($(".form-control").val().trim());
})


















///region Comment html
// $("button").on('click',function(){
//     window.location.href='comment.html'

// })
///endregion


