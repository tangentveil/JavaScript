const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', ()=>{
    // console.log(sidebar.classList.contains('show-sidebar'));
    sidebar.classList.add('show-sidebar');
    // sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar');
});