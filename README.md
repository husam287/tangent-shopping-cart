# Tangent Shop - E-commerce App

Tangent Shop is a React Native e-commerce app built with Expo, designed to provide users with a seamless shopping experience. This project implements various features integrates fake data from [[Dummy JSON](https://dummyjson.com/)].

## Features

- **Home:**

  - Displays featured products.
  - Displays wishlist products.
  - Display advertisements in an animated slider
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/home.png" height="500">](screenshots/home.png)

- **Search:**

  - Allows users to search for specific products based on keywords.
  - System is showing suggestion products within typing
  - Support search history saving
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/search.png" height="500">](screenshots/search.png)

- **Cart:**

  - Enables users to add items to their cart for purchase.
  - Each cart item has delete button
  - Minus to zero removes the item automatically
  - Using Asyncstorage for saving cart
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/cart.png" height="500">](screenshots/cart.png)

- **All Products:**

  - Provides a comprehensive list of all available products.
  - Can change the view [grid view, list view]
  - Can quick add more than 1 quantity with the help of a bottom sheet
  - Infinite scroll
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/product1.png" height="500">](screenshots/product1.png)
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/product2.png" height="500">](screenshots/product2.png)

- **Categories:**

  - Organizes products into different categories for easy navigation.
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/category.png" height="500">](screenshots/category.png)

- **Wishlist:**

  - Group your favorite products together.
  - Using Asyncstorage for saving products
  - [<img src="https://raw.githubusercontent.com/husam287/tangent-shopping-cart/main/screenshots/wishlist.png" height="500">](screenshots/wishlist.png)

## Technologies Used

- **React Native:** A JavaScript framework for building mobile applications.
- **Expo SDK 50:** A set of tools and services for building and deploying React Native apps.
- **RTK Query:** A powerful data fetching and caching library for React applications.
- **Expo Images:** Enables the loading, displaying and cache of images within the app.
- **React Native Reanimated 2:** A React Native library for building fluid and interactive animations.
- **Expo Updates:** Facilitates over-the-air updates for the app, ensuring seamless updates without app store submissions.
- **Atomic Design:** A methodology for creating design systems with reusable components.
- **Plop:** A code generator that automates the creation of <b>Components</b>, <b>Screens</b>, <b>Styles</b> and <b>Types</b> saving development time and maintaining consistency.

## Installation

To run Tangent Shop locally, follow these steps:

1. Clone the repository: `git clone https://github.com/husam287/tangent-shopping-cart.git`
3. Install dependencies: `npm install` or `yarn install`
4. Start the Expo development server: `npm start`

## Deployment

Download apps
-  Android [click here](https://expo.dev/artifacts/eas/5XPU683KRLQ9VvfM8uTJJV.apk)
- IOS <i>not available (need apple developer account)</i>

## Acknowledgements

- Thank you to the creators of Expo, React Native, and all other libraries and tools used in this project.
- This project has initiated by [My Starter Template](https://www.npmjs.com/package/@husam287/expo-template-ts) which implements some extra features that is not used in this task like (notifications, Localization, deep-linking, forms with validation and etc.)

## Contact

For any inquiries or feedback, please contact [hossam.sherif.hassan@gmail.com](mailto:hossam.sherif.hassan@gmail.com).
