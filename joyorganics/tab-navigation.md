## Joy Organics Tab

The task was to correct the tab that was existing. The first tab was to load by default, and a click on 'faq' should jump to the very end.

Code Sample:
```
    function getTab() {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }
    Here, the getTab function is to hide all tab content, the replace the class 'active' with nothing.


    function openCity(evt, cityName) {
        getTab();
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    Whenever a tablink is clicked, it grabs the event object, and the `cityname`, runs getTab, to reset everything, and then sets the current 'tablink' class to include active, and then gets the particular tabcontent to show, through 'cityname' with coincides with the tabcontent's ID.


    function moveToReviews(evt, cityName) {
        let firstTab = document.getElementById("firstTab");
        firstTab.className += " active";
        
        document.querySelector('#Reviews').scrollIntoView({ 
        behavior: 'smooth' 
        });

        document.getElementById(cityName).style.display = "block";
    }
    'Reviews' was the first tab option


    function moveToBottom(evt) {
        getTab();
        evt.currentTarget.className += " active";
        document.querySelector('.faq-container').scrollIntoView({ 
        behavior: 'smooth' 
        });
    }
    When a tablink is clicked, it grabs the event object, resets the tab with the getTab function, assigns event to the faq tablink class, then scrolls down to the faq section because it had no tabcontent but a whole section.
```