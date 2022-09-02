# Taylor-Website
This is a repo containing my personal website frontend code.
Written with React.

The subdirectory ```src/components``` contains resuable React components that are used throughout the site.
The subdirectory ```src/routes``` contains different 'main views'. The React router will point to these routes. These routes use a collection of components.


# Features

All of the media for this site comes from the contentful CMS. The blog section updates automatically when new posts are added to the cms. React sends a graphql query to contentful and renders the response. I have also included automatic image and markdown embedding for rich text formatted documents. Check out ```src/components/Post.js``` to see this in action.


# Todo: 
 - Make background blur when hovering over one image
 - ~~Make column style when screen size is too small~~
 - Add Breadcrumbs to top of screen
 - Add touch detection:
    ``` javascript
    document.documentElement.className += 
        (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
    ```
 - Add image next to header on main page
 - Do custom font for non-headers
 - ~~Switch to a content management system~~
 - Have maximum widths/heights calculated before sending requests for images from CMS