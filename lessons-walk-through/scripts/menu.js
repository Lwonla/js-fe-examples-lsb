(function () {
    let navElement = document.createElement("nav"); // här skapas nav som element
    navElement.setAttribute('id', 'top-menu');
    navElement.setAttribute('aria-label', 'subject categories');
    let ulElement = document.createElement("ul");
    navElement.appendChild(ulElement); // här läggs ul till som "child" till nav

    var menuItems = [ // Arrayer är dynamiska, flera värden på en indexplats är möjliga och att namnge värderna.
        { linktext: 'Google', link: 'https://google.com' },
        { linktext: 'YouTube', link: 'https://youtube.com' },
        { linktext: 'Facebook', link: 'https://facebook.com' }
    ];

    // här har valts en loop, för att slippa skriva create/append li och a upprepat 
    for (var i = 0; i < menuItems.length; i++) { // räknar indexplatserna i arrayen
        var liElement = document.createElement("li");
        var aElement = document.createElement("a");

        aElement.href = menuItems[i].link;
        aElement.innerHTML = menuItems[i].linktext;

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }

    window.onload = function () {
        document.body.insertBefore(navElement, document.body.firstChild);
    }
}());