document.body.onload = function () {
    var preloader = document.getElementById('page-preloader');
    setTimeout(function () {
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            document.body.style.overflow = ''
        }
    }, 1000);
    if (!preloader.classList.contains('done')) {
        preloader.classList.add('preloader-lock');
        document.body.style.overflow = 'hidden'
    }
    else {
        preloader.classList.remove('preloader-lock');
    }
}
