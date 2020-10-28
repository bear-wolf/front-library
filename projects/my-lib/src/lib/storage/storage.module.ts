import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageService} from './services/index';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    providers: [StorageService],
    exports: [

    ]
})
export class StorageModule { }
