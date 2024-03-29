# husam287-expo-template-ts

FILE BASE ROUTING EXPO SDK 49 Template (typescript)

> Be sure to have [Node.js LTS release](https://nodejs.org/en) installed (v16+ required, v18+ recommended).

```bash
npx create-expo-app [name] --template @husam287/expo-template-ts
```

## ⚡ Stack and Dependencies

- [**React Navigation 6**](https://reactnavigation.org/): For navigating through screens, we are using react navigation's tab and stack navigators with custom header created
- [**Redux Toolkit**](https://redux-toolkit.js.org/): We use redux toolkit to manage universal state. An introduction into redux toolkit can be found [here](https://www.youtube.com/watch?v=9zySeP5vH9c).
- [**RTK Query**](https://redux-toolkit.js.org/rtk-query/overview): a high performance lib for fetching data
- [**Icomoon**](https://icomoon.io/): To use custom icons using icon component and files generated from [Icomoon website](https://icomoon.io/)
- [**Form Validation:**](https://react-hook-form.com/) We are using [react-hook-form](https://react-hook-form.com/) and [yup](https://www.npmjs.com/package/yup) to validate our user inputs, checking them in our form-input component while passing the yup schema in the screens
- [**Translations:**](https://www.npmjs.com/package/i18n-js) We are using [react-i18next](https://react.i18next.com/) and [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) to translate the app (en - ar) - i.e use (useAutoCompleteTranslation) hook to enjoy autocompleted i18n keys.
- [**EAS and live update configuration:**](https://docs.expo.dev/build/introduction/) EAS and expo publish configurations are ready to use (production and testing channels).
- [**Eslint with airbnb config:**](https://www.npmjs.com/package/eslint-config-airbnb) To keep your code more clean and improve its quality
- [**Husky:**](https://github.com/typicode/husky) To make pre-commit hooks
- [**Lint-staging:**](https://github.com/okonet/lint-staged#Configuration) Work with husky to prevent commit code without making linting
- **Absolute Imports:** To avoid annoying relative.
- **App Name Localization:** Now you can localize the app name with the key of "CFBundleDisplayName" for ios and "app_name" for android in i18n files

## 🔧 Usage

> Be sure to have [Node.js LTS release](https://nodejs.org/en) installed (v16+ required, v18+ recommended).

>1) install the template
```bash
npx create-expo-app [name] --template @husam287/expo-template-ts
```

>2) install eas-cli globally
```bash
npm install -g eas-cli
```

>3) configure the expo project linkage
```bash
eas build:configure
```

>4) configure eas updates (required before build)
```bash
npm run deploy:test
```
### 💻 **Development Practices**

1. **Responsive:** Make sure to utilize responsive color and screen sizes for components in constants folder.
2. **Lightweight Files:** Keep files under ~500 lines of code. If you much longer than this you should probably be creating a different component to import in.
3. **Compilation and Formatting:** Strongly type when possible to cut down on runtime errors while also linting code often to maintain strong formatting.
4. **Naming Conventions:**  
   _Directories:_ all lower case with - for spaces (ex. home-components)  
   _Files/Components:_ Capital first letter and CamelCase (ex. \<FormInput />)  
   _Variables:_ camelCase (ex. const isLoading)
   _Constant value:_ all upper case \_ for spaces (ex. GLOBAL_STYLES)

## 📂 Organization

`src/components`: useful re-usable component library.  
`src/constants`: app constants, such as theme, that remain consistent throughout the app.  
`src/redux`: redux features, organized using the slice pattern.  
`src/hooks`: useful hooks that can be re-used throughout the app.  
`src/screens`: the main screens of the app (features).  
`src/api`: apis using rtk query; organized as endpoints
`src/assets`: all assets
