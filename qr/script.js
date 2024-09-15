let imgbox=document.getElementById("imgbox");//looking for element in webpage with id=''imgbox''
let qrImage=document.getElementById("qrimage");
let qrtext=document.getElementById("qrtext");
function generateQr()
{
    if(qrtext.value.length>0)//this check  text inside an input field
    {
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;//src attri of img fetch external services and appends the text user enter 
 imgbox.classList.add("show-img");//add css class to an ele with ID "imgbox" where  we have done how image will appear
    }
    else{
        qrtext.classList.add('error');//add class CSS "error" to input field where user input text
        setTimeout( ()=>{
          qrtext.classList.remove('error');//after one sec it removes the 'error' class likely to return the input field to its normal appearance
        },1000);
    }
}
//setTimeout-> is JS func waits for certain amount of time
