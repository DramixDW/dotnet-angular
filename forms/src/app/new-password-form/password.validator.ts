import { AbstractControl, AsyncValidatorFn } from "@angular/forms";

export class PasswordValidation {
	static CheckPassword(currentPassword: string = 'banane'): AsyncValidatorFn {
		return (control: AbstractControl) => {
			return  new Promise((resolve, reject) => {
			if (control.value === currentPassword) {
				resolve(null);
			}
			resolve ({ doesNotMatch: true });
		})
		} 
	}

	static CheckConfirm(group: AbstractControl) {
		console.log(group.value);
		const { newPassword, confirmNew } = group.value;
		if (newPassword !== confirmNew) {
			return { badConfirm: true }	
		}
		return null;
	}
}