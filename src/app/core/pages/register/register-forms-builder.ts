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
            lastName: ['', Validators.required],
            firstName: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', [Validators.required, matchValues('password')]],
            matricule: ['', Validators.required],
            telephone: ['', Validators.required],
        });
    }

    public initRegisterForm(): FormGroup {
        return this.formBuilder.group({
            role: this.initRoleForm(),
            identity: this.initIdentityForm(),
        });
    }
}