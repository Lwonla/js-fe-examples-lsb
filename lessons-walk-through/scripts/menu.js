(function () {
    let navElement = document.createElement("nav"); // här skapas nav som element
    navElement.setAttribute('id', 'top-menu');
    navElement.setAttribute('aria-label', 'subject categories');
    let ulElement = document.createElement("ul");
    navElement.appendChild(ulElement); // här läggs ul till som "child" till nav
    
    var menuItems = [ // Arrayer är dynamiska, flera värden på en indexplats är möjliga och att namnge värderna.
        { linktext: 'JS | content', link: '/lessons-walk-through/index.html'},
        { linktext: 'JS | dom', link: `/lessons-walk-through/jsdom/jsdom.html`},
        { linktext: 'JS | language', link: '/lessons-walk-through/jslang/jslang.html'},
        { linktext: 'JS | server', link: '/lessons-walk-through/jsserver/jsserver.html' }
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