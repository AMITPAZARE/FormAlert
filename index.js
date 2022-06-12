
console.log("this is projectc 4")
let amit = document.getElementById('Name')
let email = document.getElementById('Email')
let phone = document.getElementById('Phone')
let validname = false
let validemail = false
let validphone= false 
 



let vailed = false;

amit.addEventListener('blur',()=>{
    let regex= /^([a-zA-Z]+)([\s0-9a-zA-Z+])([\s0-9a-zA-Z+]){2,20}$/

    let str = amit.value
    console.log(regex,str)
    if (regex.test(str)){
        // console.log("your name vailed")
        amit.classList.remove('is-invalid')
        validname = true
    }
    else{
        // console.log("your name is not vailed")
        amit.classList.add('is-invalid')
        validname= false
    }
    
})
email.addEventListener('blur',()=>{
    let regex= /^([a-zA-Z0-9]+)@([0-9a-zA-Z]+)\.([0-9a-zA-Z]){2,10}$/

    let str = email.value
    console.log(regex,str)
    if (regex.test(str)){
        // console.log("your email vailed")
        email.classList.remove('is-invalid')        
        validemail= true
    }
    else{
        // console.log("your email is not vailed")
        email.classList.add('is-invalid')
        
        validemail= false
    }
    
})
phone.addEventListener('blur',()=>{
    let regex = /^[0-9]{10}$/ 

    let str = phone.value
    console.log(regex,str)
    if (regex.test(str)){
        // console.log("your phone  vailed")
        phone.classList.remove('is-invalid')
        validphone= true
    }
    else{
        // console.log("your phone no. is not vailed")
        phone.classList.add('is-invalid')
        validphone= false
    }




    
})

let submit= document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(validemail && validphone && validname==true){
        
        html=`<div class="alert alert-success" role="alert">
              Your aplication is successful Thanx for visiting our webside...!
              </div>`
        document.getElementById('alert').innerHTML=html
        // console.log("sssssssssssssssssssssssssssssssssssssssssss")
        html2="";
        document.getElementById('Name').value = html2
        document.getElementById('Email').value = html2
        document.getElementById('Phone').value = html2
        setTimeout(() => {
            html="";
            document.getElementById('alert').innerHTML=html

        },2000);
    }
    else{
        
        html=`<div class="alert alert-danger" role="alert">
              Something went wrong please check it out form again...!
              </div>`
        document.getElementById('alert').innerHTML=html
        
        // console.log("ffffffffffffffffffffffffffffffffffffffff")

    }
})

 
// for email regex 
  

// for phone 
     

 