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


const scriptURL = 'https://script.google.com/macros/s/AKfycbzUgkwXzog0FJUe003YQ56Hp-3HAVGLtGH5QGaSvxCa9wpLc95PPnEC72DkKRE67VU/exec'
const form = document.forms['submit-to-google-sheet']
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})