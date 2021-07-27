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
                <div class="users-comments" style="overflow: auto; height: 500px;">
                    <div class="jumbotron">
                        <div>
                        <i class="fas fa-user-circle mr-1"></i><span class="user-name font-weight-bold">John</span> 
                        </div>
                        <div class="user-comment">
                            I think this book is good,but with only o💪💪💪
                        </div>
                    </div>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
                    <div class="jumbotron"></div>
              </div>
            </div>
            <div class="col-lg-7 col-12">
                <h2 style="color: #0E345A;" class="comment-title"></h2>
                <p style="color: #0E345A;" class="comment-description"></p>
                <h5 style="font-style: italic; color: #0E345A;" >Rating Point:<span class="comment-rating"></span>/5</h5>
            </div>
        </div>
        <div class="modal-footer d-flex flex-column">
          <div class="form-group mx-auto">
            <label for="formGroupExampleInput" class="font-weight-bold" style="color:#0E345A;">Enter your comment</label>
            <input type="text" class="form-control" size=160 id="formGroupExampleInput" placeholder="Please enter your comment">
          </div>
          <button type="button" class="btn btn-primary font-weight-bold" id="comment-btn" >Comment</button>
        </div>
      </div>
    </div>
    </div>`
    $('body').append(modal);
}


var comment=null;
var myComment=null;
$("#comment-btn").on('click',()=>{
    comment=$("#formGroupExampleInput").val().trim();
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
        db.ref('comments').push({
           comment
        })
        db.ref('comments').on('value',function(snapshot) {
            comments=snapshot.val();
        })
        for(let i in comments){
          window.localStorage.setItem('comWord',i);
        }
        db.ref(`comments/${window.localStorage.getItem('comWord')}`).once('value',function(snapshot) {
            myComment=snapshot.val();
        })
        db.ref(`users/${keyChecker}`).once('value',function(snapshot){
            var info=snapshot.val();
            window.userInfo=info;
            // $(".users-comments").append(`<div class=jumbotron >
            //     <div class='user-comment'>${window.userInfo.userName}</div>
            //     <div class='user-comment'>${comment}</div>
            // </div>`);

            for(let i=0;i<$(".count").length;i++){
              $(".users-comments").eq(i).append(`<div class="jumbotron">
                <div>
                <i class="fas fa-user-circle mr-1"></i><span class="user-name font-weight-bold">${window.userInfo.userName}</span> 
                </div>
                <div class="user-comment">
                    ${myComment}
                </div>
            </div>`);
            }
            

        })
        
        
    }
})





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
        $('.photo-box').eq(i).data("url",response.items[i].volumeInfo.imageLinks.smallThumbnail);
        
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
    })
    console.log($(".form-control").val().trim());
})


















///region Comment html
// $("button").on('click',function(){
//     window.location.href='comment.html'

// })
///endregion


