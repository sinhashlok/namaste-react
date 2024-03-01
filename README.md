# Namaste React

### <a href="https://sinhashlok-foodify.netlify.app/" target="_blank" rel="noreferrer">Live Link</a>

## Installation

`npm install`<br>
`npm start` - localhost:1234<br>
`npm build`<br>

##### If you face a CORS issue - Please use a disabled version of CORS browser
For Chrome Windows `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
<br>
For Chrome MacOS - `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`
<br>
For Brave MacOS - `open -n -a /Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser --args --user-data-dir="/tmp/brave_dev_sess_1" --disable-web-security`

## Description

<span>
This project I made while learning React from Namaste-React by Akshay Saini.<br>
<Strong>This App is not made using Creat React App.</Strong>

We have used <b><em>Parcel</em></b> as bundler. We used <b><em>Browserslist</em></b> to allow App to <u>support only last 2 Chrome & FireFox version.</u>
<br><br>
This App is inspired by Swiggy, We even use actual Swiggy API to get data for Restaurants and it's menu.

<ul>
  <li>Home</li>
  - Fetch the data from Swiggy API to get list of Restaurants.<br>
  - Use RTK Query to fetch data and cache it, to prevent making multiple API calls when navigating away.<br>
  - Give option to Search for Restaurant & Filter Restaurants.<br>
  - Username input update the user's name, made using React Context.
  <li>Restaurant Menu</li>
  - Fetch the data from Swiggy API, to get Menu Items.
  <li>About us</li>
  - Displays data of Developer (me), fetched using GitHub API.
  <li>Grocery</li>
  - Created using Lazy Loading concept.<br>
  - The (code of )component gets loaded only when we navigate to it.
  <li>Add to Cart</li>
  - We use Redux to centralised the data for the items added to cart.
</ul>
</span>
<br>

## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (Refresh page)
- File Watching Algorithm - in C++
- Caching -> Faster Builds
- Image Optimization
- Minification of Files
- Bundling of Files
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diganostic
- Error Handling
- Host on HTTPs
- Tree Shaking - remove unused code
- Different Dev & Prod Bundles

# Foody

Header

- Logo
- Nav items
  Body
- Search
- RestaurantContainer - Restaurant Card - Img - Name of the Restaurant - Rating (star) - Cuisine - ETA
  Footer
- Copyright
- Links
- Address
- Contact
  <br>

### Two Types of Export/Import

- Default Export/Import
  export default Component
  `import Component from "./path"`
- Named Export/Import
  export const Component
  `import { Component } from "./path"`
  <br><br>

# Redux Toolkit

- Install `@reduxjs/tookit` & `react-redux`
- Build our Store
- Connect our Store to our App
- Slice (cartSlice)
- Dispatch (action)
- Selector
