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
        },
        e=>console.log('error while getting JSON',e));
  }
  onSelect(domain: Domain): void {
    this.selectedDomain = domain;

  }
  save():void {

    for (let i in this.data) {
      for(let j in this.data[i].skills){
        for(let k in this.data[i].skills[j].tabs){
          if(this.data[i].skills[j].tabs[k].val){
            this.data[i].skills[j].grade=this.data[i].skills[j].tabs[k].key;
          }
        }
      }
    }
    console.log(this.data);
  }
}
