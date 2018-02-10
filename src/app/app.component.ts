import {Component, OnInit} from '@angular/core';
import {JsonSkillsService} from './services/json-skills.service';
import {Domain} from './dto/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data;
  selectedDomain;

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
  onSelect(domain: Domain): void {
    this.selectedDomain = domain;
    console.log("le domain ",domain);
  }
}
