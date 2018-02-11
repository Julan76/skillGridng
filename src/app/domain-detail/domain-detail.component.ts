import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Domain} from '../dto/domain';
import { MatRadioChange } from '@angular/material';
import {Tab} from '../dto/skill';


@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit,OnChanges {
  @Input() domain: Domain;
  skillToModify;
  tab=[
    { key: 0, val: true,skill:null },
    { key: 1, val: false,skill:null },
    { key: 2, val: false,skill:null },
    { key: 3, val: false,skill:null }
  ];
    ngOnChanges() {
      if(this.domain!=null) {
        for(const i in this.domain.skills ) {
        var tab1= new Tab({key:0,val:true,skill:this.domain.skills[i].text});
        var tab2= new Tab({key:1,val:false,skill:this.domain.skills[i].text});
        var tab3= new Tab({key:2,val:false,skill:this.domain.skills[i].text});
        var tab4= new Tab({key:3,val:false,skill:this.domain.skills[i].text});

           this.domain.skills[i].tabs=[];
        this.domain.skills[i].tabs.push(tab1);
        this.domain.skills[i].tabs.push(tab2);
        this.domain.skills[i].tabs.push(tab3);
        this.domain.skills[i].tabs.push(tab4);

        }
      }

    }
  update(skill,index) {
    this.skillToModify= this.domain.skills.filter(x => x.text===skill.text);

   // this.skillToModify.tab[index].val = !this.skillToModify.tabs[index].val;

    console.log("la skill ",this.skillToModify);

    for(let i =0;i< this.skillToModify[0].tabs.length;i++) {
      if(i===index) {
        console.log("le tab a modifier ",this.skillToModify[0].tabs[i]);
        if(!this.skillToModify[0].tabs[i].val) {
          this.skillToModify[0].tabs[i].val=true;
        }
        console.log("after", this.skillToModify[0].tabs[i]);
       // this.skillToModify[0].tabs[i].val=false;
      }
      else {
        this.skillToModify[0].tabs[i].val=false;

      }

    }
    console.log(this.domain.skills);
 //   console.log(this.skillToModify[0]);
  }

  constructor() { }

  ngOnInit() {
  }


}
