document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');
    const mode = document.getElementById('mode');
    const body = document.getElementById('body');

    menu.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 870) {
            sidebar.classList.add('hidden');
        }
    });
});
