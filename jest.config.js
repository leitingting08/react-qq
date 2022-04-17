module.exports = {
    transform: { // transform jsx
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: { 
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.js",
      '^.+\\.(css|less)$': 'identity-obj-proxy' // use identity-obj-proxy mock CSS Modules
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  } 