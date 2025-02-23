import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'

@Component({
    selector     : 'Component4a7cb7f0c7aa463b905d9fc2444dfb15',
    standalone   : true,
    templateUrl  : './Component4a7cb7f0c7aa463b905d9fc2444dfb15.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule
    ]
    
})
export class Component4a7cb7f0c7aa463b905d9fc2444dfb15
{

    @Input() data:any;
    /**
     * Constructor
     */
     constructor(public sanitizer:DomSanitizer){}

     isChecked(key:string){

        let answer = this.data.runtime.data.answer;
        if(answer){
            return (answer as string[]).includes(key);
        }
        return false;
     }

     onAnswerChange(event: any) {

        let answer = this.data.runtime.data.answer;
        if(!answer){
            if(event.checked){
                this.data.runtime.data.answer=[event.source.value]
            }            
        }   
        else{
            if(event.checked){
                this.data.runtime.data.answer=[...this.data.runtime.data.answer,event.source.value]
            }
            else{
                this.data.runtime.data.answer = (this.data.runtime.data.answer as string[]).filter(t=>t!==event.source.value);
            }
        }             

     }


}
