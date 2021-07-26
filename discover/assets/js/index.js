var keyChecker=window.localStorage.getItem('keyWord');
var db=firebase.database();
db.ref(`users/${keyChecker}`).once('value',function(snapshot){
    var info=snapshot.val();
    window.userInfo=info;
    $("#firebase-name>span").html(window.userInfo.userName);
    $("#firebase-name").removeAttr('href');
})  

for(let i=0;i<$(".count").length;i++){
    $(".count").eq(i).attr("data-target",`#img${i}`);
    $('body').append(`  <div class="modal fade" id="img${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`);
}








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


