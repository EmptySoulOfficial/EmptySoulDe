# Empty Soul - React-App project

### Start react scripts:
npm start

### Build
npm build
_____

### installed npm:
- scss
- classnames
- react-router-dom@5
- jQuery
____
### Basics:
#### styles
- Each component has its own style file named after its own name.
- Basic styles, how certain environment variables, colors and other global looks can be found in the assets folder.
- More precise styles, such as which font size is used where, is defined via the Theme.scss.
- Theme.scss and index.scss from the scss-asset folder are both imported by the App.css

#### fonts
- All fonts can be found in the src/assets/fonts folder
- The fonts are imported from fonts.scss in the asset folder (assets/css/fonts) and applied in theme.scss.

#### graphics
- Folder: src/assets/graphics
- All Icons are stored in the Icon.svg in the icons folder.

#### public graphics
- Folder: public/media/
- Here are media files such as Wallpaper/backgrounds, imgaes, thumbnails and favicons.

#### how are components imported
- Most of the components in the src/Components folder are imported from the components in the content folder.
- In the Components/content folder there are larger blocks that are loaded into the pages.
- Page (src/pages/) components are the main "pages" that app.js uses to display

______________

### Demo content
- Path: src/componetns/content/demoContent

Copy and paste this component to create some page blocks/contents.
Please rename and fill it, with your own informations.
In order for the component to be correctly integrated and functional, 
it must be imported into a "page" component. (src/pages/[YourPage])
Normally, the components are wrapped with the page-div "MainEntity" (e.g."Home-MainEntity")

### page routing (routeData.js)

#### Import component
example: import AboutMe from "../Path/AboutMe/AboutMe";

#### map page route
    {
      ItemName: {de: 'Über Mich', en: 'About me'}, // Displayed name for navigation links (old)
      RouteType: 'Link', // Changes the type of routing and button links. 
                         // "Link": uses fake paths like "pagename.com/impressum" to navigate. 
                         // "href": classic anchor.
        route: '/AboutMe', // Visible path name. Use "#IdName" for anchor type.
        component: AboutMe //The component, where everything happen. If anchor type is used, use the same component, where the anchor is linked.
    }

### smooth scrollalble buttons
to activate smooth scrolling effect (on click) for a button,
use "button-scroll" as class name.
____________________________________
////////////////////////////////////

### Markdown Preview:
Use strg+k v to display readme preview via Markdown Preview Enchanced

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