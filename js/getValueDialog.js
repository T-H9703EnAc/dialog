let dialog = document.querySelector('dialog');
let reflect = document.getElementById('reflect');
let cancel = document.getElementById('cancel');
let getValue = document.getElementById('getValue');
let dialogForm = document.forms.dialogForm;

reflect.addEventListener('click', function(){
    console.log(dialogForm.elements['name'].value);
    console.log(dialogForm.elements['gender'][0].value);
    console.log(dialogForm.elements['gender'][1].value);
    console.log(dialogForm.elements['fruit'][0].checked);
    console.log(dialogForm.elements['fruit'][1].checked);
    dialog.close();
}, false);

cancel.addEventListener('click', function(){
    console.log("キャンセル！");
    dialog.close();
}, false);

getValue.addEventListener('click', function(){
    dialog.showModal();
}, false);