## spfx-sidepanel-component

Project leverages the [PnP Modern Search Extensibility Library](https://microsoft-search.github.io/pnp-modern-search/search-extensibility-library/getting-started/) pattern to provide a Web Component allowing custom handlebars template developers to open item forms / urls within the search results page in a pop out side panel (iframe).

### Installing on SharePoint Online

Build solution using: 

```
gulp clean
gulp bundle --ship
gulp package-solution --ship
```

Add the .sppkg to your App Catalog and deploy to all site collections.

### Adding to your custom handlebars template

Add the web component directly in handlebars code using the following tag:

```html
<pnp-sidepanel-component title="{{Title}}" viewformurl="{{getUrl item}}" position="custom|customNear|extraLarge|large|largeFixed|medium|smallFixedFar|smallFixedNear|smallFluid" size="100px|10rem|40%|etc." newwindow="true|false" ></pnp-sidepanel-component>
```

#### title
Contains text appearing in top of the side panel

#### viewformurl
Contains the URL to the list item / page to be displayed in the side panel. 

#### position
The position of the side panel, either the left or right size. All positions with the exception of custom/customNear leverage device specific breakpoints for width (320-470, 480-639, 640-1023, 1023-1365, 1365px and up). Custom positions do not leverage device specific breakpoints and only accept one width.

Available options:

smallFluid: Renders the Panel with a `fluid` (full screen) width.

smallFixedFar: Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).

smallFixedNear: Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).

medium: Renders the Panel in `medium` size, anchored to the far side (right in LTR mode).

large: Renders the Panel in `large` size, anchored to the far side (right in LTR mode).

largeFixed: Renders the Panel in `large` size, anchored to the far side (right in LTR mode), with a fixed width at XX-Large breakpoint.

extraLarge: Renders the Panel in `extra large` size, anchored to the far side (right in LTR mode).

custom: Renders the Panel in `custom` size using `size` parameter, anchored to the far side (right in LTR mode).

customNear: Renders the Panel in `custom` size using `size`, anchored to the near side (left in LTR mode).

#### size
The width of the side panel. May be any valid HTML width value.

#### newwindow
Determines if users should see the open in new window icon before the link. When the icon is clicked the link opens in a new tab/window. Default false. Set to true to display icon.

### Configuring the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

### Build options

gulp clean
gulp test
gulp serve
gulp bundle
gulp package-solution