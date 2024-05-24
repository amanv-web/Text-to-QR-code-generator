const input = document.querySelector('input');
const button = document.querySelector('button');
const qrcode = document.querySelector('img');

button.addEventListener('click', () => {
    const inputvalue = input.value;

    if(!inputvalue){
        alert('Please  something to generate QR code');
    }else{
        qrcode.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        console.log(inputvalue);    
    }
});