import { Component } from "@angular/core";

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

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value;
    // }
}