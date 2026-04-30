import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[filtrar-caracteres]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: FiltrarCaracteres, multi: true }
    ]
})
export class FiltrarCaracteres implements Validator {

    validate(control: AbstractControl) {
        if (!control.value) return null;

        const contenido = control.value;

        for (let i = 0; i < contenido.length; i++) {
            const letra = contenido.charAt(i);
            const valor = letra.charCodeAt(0);

            if (!(valor >= 65 && valor <= 90)) {
                return { filtrarcaracteres: true };
            }
        }

    return null;
    }
}
