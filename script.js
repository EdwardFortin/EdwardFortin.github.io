function scrollToTarget(targetId) {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}

var scrollToAboutButton = document.getElementById('scrollToAbout');
if (scrollToAboutButton) {
    scrollToAboutButton.addEventListener('click', function() {
        scrollToTarget('about');
    });
}

var downArrowLink = document.querySelector('.down');
if (downArrowLink) {
    downArrowLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        scrollToTarget('about');
    });
}
