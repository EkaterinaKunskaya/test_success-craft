import { required, email, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators';

export const giveErrorMessage = (error, characters) => {
    let message = '';
    switch (error) {
        case required: 
            message = 'This field cannot be empty.';
            break;
        case alpha: 
            message = 'This field should only contain letters.';
            break;
        case email: 
            message = 'Please enter a valid email.';
            break;
        case numeric: 
            message = 'Zip code should only contain numbers.';
            break;
        case minLength: 
            message = `This field must contain at least ${characters} characters.`;
            break;
        case maxLength: 
            message = `This field must contain no more than ${characters} characters.`;
            break;
    }

    return helpers.withMessage(message, 
        (error === minLength || error ===  maxLength)? 
            error(characters) : 
            error
        );
}