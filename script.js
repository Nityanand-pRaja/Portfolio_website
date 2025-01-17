
// document.querySelector('.cross').style.display='none';
// document.querySelector('.hamburger').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector('.ham').style.display='inline'
//         document.querySelector('.cross').style.display='none'
//     }
//     else{
//         document.querySelector('.ham').style.display='none'
//         document.querySelector('.cross').style.display='inline'
//     }
// })




var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}