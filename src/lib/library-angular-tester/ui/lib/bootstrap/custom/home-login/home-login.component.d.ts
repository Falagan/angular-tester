import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import IHomeLoginData from "./models/IHomeLoginData";
export declare class HomeLoginComponent implements OnInit {
    private _formBuilder;
    data: IHomeLoginData;
    navigateTo: EventEmitter<any>;
    loginForm: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    /**Handle form in view*/
    readonly lf: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
}
