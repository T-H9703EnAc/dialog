let dialog = document.querySelector('dialog');
let yes = document.getElementById('yes');
let cancel = document.getElementById('cancel');
let confirm = document.getElementById('confirm');

yes.addEventListener('click', function(){
    console.log("はい！");
    dialog.close();
}, false);

cancel.addEventListener('click', function(){
    console.log("キャンセル！");
    dialog.close();
}, false);

confirm.addEventListener('click', function(){
    dialog.showModal();
}, false);