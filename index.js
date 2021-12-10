const CreateCustomPassword = require('./utils/CreateCustomPassword');

class Generator {

    passwordType;

    constructor(passwordType) {
        this.passwordType = passwordType;
    }

    /**
     * @param length
     * @param hasNumbers
     * @param hasSpecial
     * @returns {string}
     */
    static customPassword = (length = 10, hasNumbers = true, hasSpecial = true) => {

        const CustomPassword = new CreateCustomPassword(length, hasNumbers, hasSpecial);
        return CustomPassword.create();
    }
}

module.exports = Generator;