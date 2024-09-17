document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');

    menu.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 870) {
            sidebar.classList.add('hidden');
        }
    });
});
