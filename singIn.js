let chars="sdsdjkfsdkfjskdfbsdfs,ndf9t3409503kjsdfjks";


function generateId(number){ 
for(let i=0; i<chars.length; i++){
    let result="";
    result=result+chars.charAt(Math.floor(Math.random()* chars.length));
}

return result

}

function SignIn(){
    let Firstname=document.getElementsByClassName("Firstname").value;
    let Lastname=document.getElementsByClassName("Lastname").value;
    let Username=document.getElementsByClassName("username").value;
    let password=document.getElementsByClassName("password").value;
    let RememberMe=document.getElementById("remeberMe").checked;

    let SignContent=localStorage.getItem("userdata");
    SignContent=JSON.parse(SignContent);

    for(let userdata of SignContent){
        if(userdata.Firstname===Firstname && userdata.Lastname===Lastname && userdata.Username===Username
            && userdata.password===password);
        if (RememberMe.checked===true){
            let timeNow = new Date();

                timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)
            
                let atTime = timeNow.toUTCString();
            
                let value = generateString(36);

                document.cookie = `sessionToken=${value};expires=${atTime};path=/`
                
                SignContent.sessionToken = value;
            } else {
                let value = generateString(36);
                SignContent.sessionToken = value;
                sessionStorage.setItem("sessionToken", value)
            }
        }
        localStorage.setItem("usersData", JSON.stringify(dataFromDb))
    }

    
        




