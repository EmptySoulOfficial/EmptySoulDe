# Empty Soul - React-App project

### installed npm:
- scss
- classnames
- react-router-dom@5

### Build:
npm start

### Scss
- assets/index.scss and theme/theme.scss are imported by App.scss

### smooth scrollalble buttons
to activate smooth scrolling effect (on click) for a button,
use "button-scroll" as class name.

### page routing (routeData.js)

#### Import component
example: import AboutMe from "../Path/AboutMe/AboutMe";

#### map page route
    {
      ItemName: {de: 'Über Mich', en: 'About Uns'}, // Displayed Name for navigation links (old)
      RouteType: 'Link', // Changes the type of routing and button links. 
                         // "Link": uses fake paths like "pagename.com/impressum" to navigate. 
                         // "href": classic anchor.
        route: '/AboutMe', // Visible path name. Use "#IdName" for anchor type.
        component: AboutMe //The component, where everything happen. If anchor type is used, use the same component, where the anchor is linked.
    }

### ToDo:
- scroll bar (not used-remove?)
- menu
- cookie popup
- 404 page routing
- accessibility support
- animaions

### Welche Punkte soll die Seite haben?
- SocialMedia (Im menu-> Kopfhörer)
----
---- Home Bereich (Component: pages/Home)

- Home (Header)
- Video
- Latest Release (Aktuellen Song/Album mit playback möglichkeit)
- Music (Bisher veröffentlichte lieder)
- Tickets (Shows)
- Newsletter (E-Mail marketing)
//footer

---- AboutMe Bereich (Component: pages/AboutMe)
- AboutMe (Biographie und Gechichte zu mir mit Bilder -> kleine artworks dazu, wie ein bilderbuch ->etwas passiert, dazu ein gezeichnetes bild)

---- Impressum und Datenschutz -> jeweils eigene unter seiten (components: pages/impressum und pages/privacy)