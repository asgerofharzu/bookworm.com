$(function() {

    // $('#form2').on('keyup',function(){
    //     if (!($(":invalid").length)) {
    //         $("#singup-login").css({
    //             opacity:'1',
    //         })
    //     }else{
    //         $("#singup-login").css({
    //             opacity:'0.3',
    //             pointerEvents:'none',
    //             cursor:'pointer'
    //         })
    //     }
    //     console.log($(":invalid").length);
    // })
    var db=firebase.database();
    var users=null;
    db.ref('users').on('value',function(snapshot) {
        users=snapshot.val();

    })


    $("#form1").on('submit',function(e) {
        e.preventDefault();
        
        let userName=$("#signin-user").val().trim();

        let password=$("#signin-password").val().trim();

        const container = document.querySelector(".container");

        

        for(let i in users){
            var user=users[i];
            
            if (user.userName===userName && user.password===password) {
                window.localStorage.setItem('keyWord',i);
                window.location.href="singn_up/index.html";
                return;
            }
            
        }

        $(".checker").html('Please check your password or username');
        $(".checker").css({
                color:'#f00'
        })

        const register=confirm('Do you have been registration?');
        if (register) {
            $(".checker").html('');
            container.classList.add("sign-up-mode");
        }      

    })
    



    $("#form2").on('submit',function(e){
        e.preventDefault();
        let userName=$("#signup-user").val().trim();
        let email=$("#signup-mail").val().trim();
        let password=$("#signup-password").val().trim();

        if (!userName || !email || !password) {
            $(".error").html('Something went wrong!!!');
            $(".error").css({
                color:'#f00'
            })
        }else if (userName!==""&& email!==""&& password!=="") {
            $(".error").html('');
        }

        // alert(`${userName} ${email} ${password}`);

        const container = document.querySelector(".container");

        var db=firebase.database();

        db.ref('users').push({
            userName,
            email,
            password
        }).then(result=>{
            alert("You're successfull register");
            container.classList.remove("sign-up-mode");
            // window.location.href="/Users/emilabdulxaliqov/REPOS/bookworm.com/singn_up/index.html";

        })


    });
  


})