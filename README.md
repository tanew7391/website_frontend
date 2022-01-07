# Taylor-Website
This is a repo containing my personal website frontend code.
Written with React.

The subdirectory ```components``` contains resuable React components that are used throughout the site.
The subdirectory ```routes``` contains different 'main views'. The React router will point to these routes. These routes use a collection of components.

# Todo: 
 - Make background blur when hovering over one image
 - Make column style when screen size is too small - done
 - Add Breadcrumbs to top of screen
 - Add touch detection:
    ``` javascript
    document.documentElement.className += 
        (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
    ```
 - Add image next to header on main page
 - Do custom font for non-headers