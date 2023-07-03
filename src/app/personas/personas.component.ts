import { Component, OnInit } from "@angular/core";
import { Persona } from "../persona.model";
import { PersonasService } from "../personas.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
    disable = false;
    message = "";
    title = "aver";

    show = false;

    addPerson(){
        this.message = "Person added";
        this.show = true;
    }

    personas: Persona[] = [];

    
    
    constructor(private personasServices: PersonasService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.personasServices.ObtenerPersonas().subscribe(
          (personas: Persona[]) => {
            this.personas = personas;
            this.personasServices.setPersonas(personas);
          }
        );
      }
     
    // ngOnInit(): void {
    //     this.personasServices.ObtenerPersonas().subscribe(
    //       (response: any) => {
            
    //         let ArrayFormat = Object.values(response) as Persona[];
    //         console.log((Array.isArray(ArrayFormat)));
    //         console.log((Array.isArray(response)));
    //         console.log(ArrayFormat[0][0].apellido);
    //         // if (Array.isArray(ArrayFormat)) {
    //         //     console.log("entra");
    //         this.personas = ArrayFormat;
    //         // } else if (ArrayFormat && typeof ArrayFormat === 'object') {
    //         //   // Assuming the personas data is stored in a property called 'data'
    //         //   this.personas = ArrayFormat.data as Persona[];
    //         // } else {
    //         //   // Handle invalid response here
    //         // }

    //         console.log(this.personas);
    //         this.personasServices.setPersonas(this.personas);
    //       },
    //       (error: any) => {
    //         console.log("error");
    //       }
    //     );
    //   }

    
    // ngOnInit(): void {
    //     this.personas = this.personasServices.personas;
    //  }

    agregar(){
        this.router.navigate(['personas/agregar']);
       }

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value;
    // }
}