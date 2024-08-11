
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('joinModal');
    var btn = document.querySelector('a[data-target="#joinModal"]');
    var span = document.getElementsByClassName('close')[0];
    btn.onclick = function () {
        modal.style.display = 'block';
    };
    span.onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
