import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    disable = false;
    message = "None person has been added";
    title = "aver";

    addPerson(){
        this.message = "Person added";
    }

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value;
    // }
}