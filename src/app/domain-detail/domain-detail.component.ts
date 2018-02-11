import {
  AfterViewChecked, ChangeDetectorRef, Component, Input, OnChanges, OnInit
} from '@angular/core';
import {Domain} from '../dto/domain';
import {Tab} from '../dto/skill';


@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit,OnChanges,AfterViewChecked {
  @Input() domain: Domain;
  skillToModify;

      ngOnChanges() {
      if(this.domain!=null) {
        if(this.domain.skills[0].tabs==null){
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

    }
  updateCheckbox(skill,index) {
    this.skillToModify= this.domain.skills.filter(x => x.text===skill.text);
    for(let i =0;i< this.skillToModify[0].tabs.length;i++) {
      if(i===index) {
        if(!this.skillToModify[0].tabs[i].val) {
          this.skillToModify[0].tabs[i].val=true;
        }
      }
      else {
        this.skillToModify[0].tabs[i].val=false;
      }
    }
  }

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked()  {
    this.cdRef.detectChanges();
  }
}
