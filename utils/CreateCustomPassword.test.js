const CreateCustomPassword = require('./CreateCustomPassword');



describe('CreateCustomPassword', () => {
    test('Password uniqueness test', () => {
       for (i = 0; i < 10000; i++){
           const password = new CreateCustomPassword(10, false, false);
           const password1 = new CreateCustomPassword(10, false, false);

           const generatedPassword = password.create();


           expect(generatedPassword).not.toBe(password1.create());
       }
    });

    test('Password length test', () => {
        const password = new CreateCustomPassword(10, true, true);
        const generatedPassword = password.create();


        expect(generatedPassword.length).toBe(10);
    })
});
