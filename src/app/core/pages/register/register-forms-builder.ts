import { inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role } from "src/app/_interfaces/roles";
import { matchValues } from "./utils/password.validator";

@Injectable({
    providedIn: 'root'
})
export class RegisterFormBuilder {
    private readonly formBuilder = inject(FormBuilder);

    private initRoleForm(): FormGroup {
        return this.formBuilder.group({
            site: ['', Validators.required],
            unite: ['', Validators.required],
            service: ['', Validators.required],
            poste: ['', Validators.required],
        })
    }
    private initIdentityForm(): FormGroup {
        return this.formBuilder.group({
            lastName: ['Grangier', Validators.required],
            firstName: ['Joris', Validators.required],
            password: ['Azerty123', Validators.required],
            confirmPassword: ['Azerty123', [Validators.required, matchValues('password')]],
            matricule: ['123', Validators.required],
            telephone: ['123', Validators.required],
        });
    }

    public initRegisterForm(): FormGroup {
        return this.formBuilder.nonNullable.group({
            role: this.initRoleForm(),
            identity: this.initIdentityForm(),
        });
    }
}