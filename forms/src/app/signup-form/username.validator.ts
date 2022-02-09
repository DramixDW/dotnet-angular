import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
	// constructor(private movieService: MovieService) {}
	// les fonctions de validateur sont toujours en static
	// elle reçoivent toujours un AbstractControl en argument
	// Renvoyer null s'il n'y a pas d'erreur
	// Renvoyer un object s'il y en a une
	static cannotContainSpace(control: AbstractControl) {
		if (control.value.indexOf(' ') > -1) {
			return { noSpacePlz: {
				details: 'jghdjk'
			} }
		}
		return null
	}

	static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
		//faire un requête get et renvoyer le résultats
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (control.value === 'Dramix') {
					resolve({ shouldBeUnique: true })
				}
				resolve(null)
			}, 5000)
		})
	}
}