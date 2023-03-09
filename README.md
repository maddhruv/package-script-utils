# package-script-utils

[![npm version](https://badge.fury.io/js/package-script-utils.svg)](https://www.npmjs.com/package/package-script-utils)

Utils to play around with package script - add script, get script, delete script.

## Getting Started

### Install

`npm i package-script-utils`

## Usage

```js
import {addScript, deleteScript, getScript} from 'package-script-utils';

const testScript = getScript('test');

addScript('postinstall', 'echo "Postinstall"');

deleteScript('postinstall')
```

## Credits

- [@maddhruv](https://maddhruv.dev?ref=ts-template)
