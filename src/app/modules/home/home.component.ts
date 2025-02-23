import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, MatIconModule,
        MatIconModule,  CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule, MatRadioModule],
})
export class LandingHomeComponent implements AfterContentInit
{

    /**
     * Constructor
     */
    constructor(private componentFactoryResolver: ComponentFactoryResolver)
    {



    }
  

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
   

    template={
  "name" : "Multiple Choice",
  "description" : "mutliple chioce component (angular version)",
  "version" : "1.0"
};
  
    reactiveComponent={
  "component" : {
    "componentTemplateId" : "67b5294794d84c64a19d1904",
    "templateDeployId" : null,
    "content" : {
      "question" : "<p>This is the question text?</p>",
      "options" : [ {
        "key" : "1",
        "value" : "choice 1"
      }, {
        "key" : "2",
        "value" : "choice 2"
      } ],
      "rightanswer" : [ "1", "2" ]
    },
    "ui" : { },
    "scores" : [ ]
  },
  "runtime" : {
    "data" : { }
  }
};



    async ngAfterContentInit() {
      
      this.StartTest();

    }

   
    async StartTest(){
      
        const componentModule = await import('../component/Component4a7cb7f0c7aa463b905d9fc2444dfb15.component');
        const TemplateComponent = componentModule['Component4a7cb7f0c7aa463b905d9fc2444dfb15'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
