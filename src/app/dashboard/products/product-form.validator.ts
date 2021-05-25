import { FormControl, ValidationErrors } from '@angular/forms';

export class ProductValidators {
    constructor() {}

    public static slugValidator(formControl: FormControl): ValidationErrors | null {
        const { value } = formControl;

        if (!value.match(/^[a-z0-9](-?[a-z0-9])*$/)) {
            return { slugError: true };
        }

        return null;
    }
}
