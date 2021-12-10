# Password-Generators

Alpha version 0.0.1

```npm i https://github.com/bopo9/password-generators```

___
*Code examples:*
___
```javascript
const Generator = require('password-generators');
//Calling the static method customPassword will generate a random password for us
/**
 * @param length: number
 * @param hasNumbers: bool
 * @param hasSpecial: bool
 * @returns {string}
 */
const password = Generator.customPassword(length, hasNumbers, hasSpecialChars)
```

