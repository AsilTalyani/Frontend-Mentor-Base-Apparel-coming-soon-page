const email = document.getElementById('email');
const input = document.getElementById("input");
const imgError = document.getElementById('img-error');


document.querySelector("form").addEventListener('submit', function(){
        if(email.value==="")
        {
            document.getElementById('img-error').style.display="block";
            input.style.border="1px solid red";
        }
        else {
            email.value = '';
            document.getElementById('img-error').style.display="none";
            input.style.border="1px solid lightgrey";
            }
        
});