---

# OverlayScrollbar

`OverlayScrollbar` is a lightweight and customizable JavaScript library for implementing custom scrollbars. It replaces the default browser scrollbar with a custom one that can be styled using CSS, improving the overall look and feel of your web application.

## Features

- Easy to integrate with any web project.
- Fully customizable scrollbar appearance.
- Responsive design that hides the scrollbar on small screens.
- Smooth scrolling and drag functionality.
- Supports dynamic content height changes.

## Installation

Include the `OverlayScrollbar.js` file in your HTML file or import it into your JavaScript project:

```html
<script src="path/to/OverlayScrollbar.js"></script>
```

Or, if you are using a module bundler like Webpack or Rollup:

```javascript
import OverlayScrollbar from 'path/to/OverlayScrollbar';
```

## Usage

To use `OverlayScrollbar`, you need an HTML element with overflow content. Initialize the `OverlayScrollbar` by passing the target element and an options object:

```html
<div id="scrollable-content" style="height: 300px; overflow: auto;">
    <!-- Your scrollable content here -->
</div>
```

```javascript
const scrollableElement = document.getElementById('scrollable-content');
const options = {
    scrollbarClassName: 'custom-scrollbar',
    scrollbarThumbClassName: 'custom-scrollbar-thumb'
};
const customScrollbar = new OverlayScrollbar(scrollableElement, options);
```

### Options

- `scrollbarClassName`: (String) The class name for the scrollbar element.
- `scrollbarThumbClassName`: (String) The class name for the draggable thumb element.

## Styling

You can style the scrollbar and its thumb by targeting the specified class names in your CSS:

```css
.custom-scrollbar {
    /* Styles for the scrollbar */
}

.custom-scrollbar-thumb {
    /* Styles for the scrollbar thumb */
}
```

## Methods

- `updateScrollbarThumbHeight()`: Updates the height of the scrollbar thumb based on the content's height.
- `updateScrollbarThumbLoc()`: Updates the location of the scrollbar thumb based on the current scroll position.

## Events

- `scroll`: The class listens to the scroll event on the target element to update the scrollbar thumb position.

## Compatibility

`OverlayScrollbar` is compatible with modern browsers that support ES6. For older browsers, you may need to include polyfills for ES6 features.

---
