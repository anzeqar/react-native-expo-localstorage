# React Native Expo Localstorage

#### react-native-expo-localstorage

# Features

1. Easy Installation
2. Easy Application
3. Zero dependency
4. CRUD Localstorage

# Installation

## Using Expo

    expo install react-native-expo-localstorage

## Using Npm

    npm install --save react-native-expo-localstorage

## Using Yarn

    yarn add react-native-expo-localstorage

# Application in React Native

### 1. Import localStorage

    import localStorage from 'react-native-expo-localstorage'

### 2. Access LocalStorage

    localStorage.getAllItems()
      .then((data) => {
        console.log(data);
        // logs entire localstorage
      })
      .catch(err => {
        console.error(err);
      })

### 3. Set Value to Localstorage

    const language = "javascript";
    localStorage.setItem("lang", language)
    // sets "lang" value as "javascript"

### 4. Get Value from LocalStorage

    localStorage.getItem(`lang`) // use ` ` character
    // javascript

### 5. Remove Value from Localstorage

    localStorage.removeItem("lang")
    // javascript will be removed

### 6. Clear Localstorage

    localStorage.clear()
    // localstorage will be cleared
