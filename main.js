function navtoogle() {
    var x =document.querySelector('.navitems')
    if (x.style.display==='grid') {
            x.style.display='none'
    } else{
            x.style.display='grid'
    }
}

function sendEmail(){
        Email.send({
                Host :"smtp.gmail.com",
                Username : "amansrivastava3516@gmail.com",
                Password : "Sriv@stavji#@1609#",
                To : 'amansrivastava3516@gmail.com',
                From : document.getElementById("email").value,
                Subject : 'Message from Website',
                Body : "And this is Body tag",
                
                // "Name: " + document.getElementById("name").value
                //       +"<br> Email : " + document.getElementById("email").value
                //       +"<br> Message : " + document.getElementById("message").value
                     
        }).then(
               message => alert("Submitted Successfully")
             );   
   }