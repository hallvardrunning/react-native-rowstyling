# Welcome to the Thinkspan Row Style creation template project.

## Objective:

Modify the two classes in the rows folder so that their styles match the styles in the designs folder.  

The app displays items that are People and items that are Stories, and the code chooses a different component to render each one.  Customize both components to match the row designs in the designs folder. 


## Setting up:
 
0) Install react-native and NPM (We recommend using nvm)

1) Check out the project via git

2) cd RowStyling

3) npm install

4) react-native run-ios


## Conventions:

**Include styles *inside* the component's file.**  Most styling behavior is the private
  implementation detail of the component. If we standardize app-wide styling
  conventions, we can style those in a separate file and decide which public style attributes each component ought to support, but we do not need to do that now.

**Assume data is provided as an immutable.js collection**.  This is the format the main app uses, it's OK to use .toJS() to convert it to a plain old js object for the designs in this project.

## Notes:

1. We are using node version 6.10.2, as reflected in the .nvmrc file in the project.

2. utils.js contains useful helpers for making this work as a scaffold / test app.  In the real app we use dynamic images that are fetched and given to the component as a uri that can be loaded without any hacks.

3. We adopt the convention of naming the outer css selector "wrapper" for each component. 

4. Feel free to import any relevant fonts into the application and to include them in the Fonts folder in the XCode project.  In order for the fonts to be available in react-native, they must be added to the "Fonts Provided by the Application" key in the info.plist file. Two weights of Roboto are added as an example.