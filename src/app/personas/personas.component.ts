import { Component } from "@angular/core";
import { Persona } from "../persona.model";
import { PersonasService } from "../personas.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    disable = false;
    message = "";
    title = "aver";

    show = false;

    addPerson(){
        this.message = "Person added";
        this.show = true;
    }

    personas: Persona[] = [
        // new Persona('Martin','Salcedo'), 
        // new Persona('Juan','Perez'),
        //  new Persona('Gaby','M') 
       ];
    
       constructor(private personasServices: PersonasService,
        private router: Router
        ){
    
       }
    
       ngOnInit(): void {
          this.personas = this.personasServices.personas;
       }

       agregar(){
        this.router.navigate(['personas/agregar']);
       }

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value;
    // }
}