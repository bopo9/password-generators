class CreateCustomPassword {
    type = {
        alpha: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        number: '0123456789',
        special: '~!@#$%^&()_+-={}[];\',.'
    };

    length;
    hasNumbers;
    hasSpecial;

    chars;
    #password = '';

    constructor(length, hasNumbers, hasSpecial ) {
        this.length = length;
        this.hasNumbers = hasNumbers;
        this.hasSpecial = hasSpecial;
    };

    create() {
        this.chars = this.type.alpha
        this.hasNumbers ? (this.chars += this.type.number) : ''
        this.hasSpecial ? (this.chars += this.type.special) : ''
        return this.generatePassword();
    }

    generatePassword() {
        for (let i = 0; i < this.length; i++){
            this.#password += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
        }
        return this.#password;
    }
}

module.exports = CreateCustomPassword;