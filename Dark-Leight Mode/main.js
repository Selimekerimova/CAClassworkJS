let controlMode=document.querySelector('.controlMode');
controlMode.addEventListener('click',function(){
    document.body.classList.toggle('dark');
    localStorage.setItem('mode',document.body.classList)
})

if(localStorage.getItem('mode')!=''){
    document.body.classList.add(localStorage.getItem('mode'))
}