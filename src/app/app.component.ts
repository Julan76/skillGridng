import {Component, OnInit} from '@angular/core';
import {JsonSkillsService} from './services/json-skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data=null;

  constructor(private jsonSkillsService:JsonSkillsService) {
  }
  ngOnInit() {
    this.loadJsonFile();
  }
  loadJsonFile():void {
    this.jsonSkillsService.getJSON()
      .subscribe(response => {
          this.data=response.domains;
          console.log(this.data);
        },
        e=>console.log('error while getting JSON',e));
  }
}
