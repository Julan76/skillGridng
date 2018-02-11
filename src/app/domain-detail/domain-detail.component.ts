import {
  AfterViewChecked, ChangeDetectorRef, Component, Input, OnChanges, OnInit,Inject
} from '@angular/core';
import {Domain} from '../dto/domain';
import {Tab} from '../dto/skill';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit,OnChanges,AfterViewChecked {
  @Input() domain: Domain;
  skillToModify;
  newSkill;

      ngOnChanges() {
        this.updateSkillTabs();
      }
  updateSkillTabs():void {
    if(this.domain!=null) {
      if(this.domain.skills[0].tabs==null) {
        for(const i in this.domain.skills ) {
          const tab1= new Tab({key:0,val:true,skill:this.domain.skills[i].text});
          const tab2= new Tab({key:1,val:false,skill:this.domain.skills[i].text});
          const tab3= new Tab({key:2,val:false,skill:this.domain.skills[i].text});
          const tab4= new Tab({key:3,val:false,skill:this.domain.skills[i].text});

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
  openDialog():void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '300px',
      data: { newSkill: this.newSkill }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newSkill = result;
      this.domain.skills.unshift({
        "text":this.newSkill
      });
      const tab1= new Tab({key:0,val:true,skill:this.newSkill});
      const tab2= new Tab({key:1,val:false,skill:this.newSkill});
      const tab3= new Tab({key:2,val:false,skill:this.newSkill});
      const tab4= new Tab({key:3,val:false,skill:this.newSkill});

      this.domain.skills[0].tabs=[];
      this.domain.skills[0].tabs.push(tab1);
      this.domain.skills[0].tabs.push(tab2);
      this.domain.skills[0].tabs.push(tab3);
      this.domain.skills[0].tabs.push(tab4);

    });
  }
  constructor(private cdRef:ChangeDetectorRef,public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewChecked()  {
    this.cdRef.detectChanges();
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
