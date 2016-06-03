# MaterialStarter (IMPORTANT, read the readme!)

### Project Structure - ***PLEASE FOLLOW THE STRUCTURE***
```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Express application (uses webpack middleware)
│   └── app.js               # Server application entry point
├── src                      # Application source code
│   ├── actions              # Redux action creators
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── reducers             # Redux reducers
│   ├── routes               # Application route definitions
│   ├── store                # Redux store configuration
│   ├── utils                # Generic utilities
│   ├── views                # Components that live at a route
│   └── app.js               # Application bootstrap and rendering
└── tests                    # Unit tests
```

#### When running you will see (AT URL: http://localhost:3000/#/ ):
![screen1](https://d3higte790sj35.cloudfront.net/images/nl/eo/e0a65a2420050c890b4e90915cd2b0e8.jpeg)

####INFORMATIONS about the view:
- RED COLOR: The header is located at ***src/layouts/CoreLayout.js***
- BLUE COLOR: The link is located at the same CoreLaout file, codesnippet:
```
          <Link to='/starter'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Example LINK THAT WORKS"
              icon={<Autorenew />} />
          </Link>
```
- GREEN COLOR: The HomeView is located at ***src/views/HomeView.js***
 
#### Second route (AT URL: http://localhost:3000/#/starter  ):
![screen2](https://d3higte790sj35.cloudfront.net/images/mv/ke/343d4ced995653d43c88ec527af78eb9.jpeg)

LOCATIONS:
- In the views folder: scr/views/SubpageView.js
- the form (Formsy) is located at ***src/components/Form.js***
- ORANGE COLOR: this is how it reacts after a submit (you can see console.log) - it is because of Formsy used, please follow


### IMPORTANT RULE: in components, we use only ***DUMB COMPONENTS*** (http://jaketrent.com/post/smart-dumb-components-react/) and in views folder we put ***SMART COMPONENTS***





### SETUP steps:
```
$ git clone <<git url>>
$ cd <<ProjectName>>
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch, then open http://localhost:<<PORTS>> in the browser
```


