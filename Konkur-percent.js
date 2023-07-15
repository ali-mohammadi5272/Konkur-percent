let all_test = document.getElementById('input100');
let true_test = document.getElementById('input200');
let false_test = document.getElementById('input300');
let form = document.getElementsByTagName('form')[0];
let myParagraph = document.getElementsByTagName('p')[0];


form.addEventListener('submit' , mohasebe);

function mohasebe(event){
    let massage;
    let sum = Number(true_test.value) + Number(false_test.value);
    
    if(all_test.value < 0 || true_test.value < 0 || false_test.value < 0){
        window.alert('تعداد تست های وارد شده نامعتبر می‌باشد');
    }
    else if(all_test.value == '' || true_test.value == '' || false_test.value == ''){
        window.alert('لطفا همه فیلد ها را پر کنید');
    }
    else if( sum > all_test.value ){
        window.alert('تعداد تست های درست و غلط وارد شده بیشتر از تعداد کل تست ها می‌باشد');
    }
    else{
        massage = ( ( ( (true_test.value * 3) -  false_test.value ) / (all_test.value * 3) ) *100 ) + '%';
        myParagraph.textContent = massage;
        event.preventDefault();
    }
}
