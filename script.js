function scrollToTarget(targetId) {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}

var scrollToAboutButton = document.getElementById('scrollToAbout');
if (scrollToAboutButton) {
    scrollToAboutButton.addEventListener('click', function() {
        scrollToTarget('about');
    });
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");
var btn = document.getElementsByClassName("active-btn");

    function opentab(tabname) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
            tabcontent[i].classList.remove("active-tab");
        }

        var selectedTab = document.getElementById(tabname);
        if (selectedTab) {
            selectedTab.classList.add("active-tab");
        }

        for (var i = 0; i < tablinks.length; i++) {
            if (tablinks[i].innerText.toLowerCase() === tabname.toLowerCase()) {
                tablinks[i].classList.add("active-link");
                break;
            }
        }
    }
