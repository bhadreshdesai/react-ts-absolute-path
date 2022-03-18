```shell
pnpx create-react-app react-ts-absolute-path --template typescript
cd react-ts-absolute-path
rm -rf node_modules/
rm -rf package-lock.json
rm -rf src
mkdir src
pnpm add -D react-app-alias react-app-rewired
```

Update [package.json](./package.json) file. Replace react-scripts in scripts with react-app-rewired

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

Create [config-overrides.js](./config-overrides.js) with the following content

```javascript
// config-overrides.js
const { aliasWebpack, aliasJest } = require("react-app-alias");

const options = {}; // default is empty for most cases

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
```

Create [tsconfig.paths.json](./tsconfig.paths.json) with the following content

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": ["./src/app/*"],
      "@libA/*": ["./src/libraries/libA/*"],
      "@libB/*": ["./src/libraries/libB/*"],
      "~/*": ["./src/*"]
    }
  }
}
```

Extend [tsconfig.json](./tsconfig.json) with [tsconfig.paths.json](./tsconfig.paths.json) by adding the following above "compilerOptions"

```json
"extends": "./tsconfig.paths.json",
```

Create the following folders with relevant react components
[./src/app/](./src/app/)

[./src/libraries/libA/](./src/libraries/libA/)

[./src/libraries/libB/](./src/libraries/libB/)
