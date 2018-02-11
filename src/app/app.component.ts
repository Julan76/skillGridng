import {Component, OnInit,Input} from '@angular/core';
import {JsonSkillsService} from './services/json-skills.service';
import {Domain} from './dto/domain';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data;
  selectedDomain;
  matricule;

  constructor(private jsonSkillsService:JsonSkillsService,public snackBar: MatSnackBar) {
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
    var checkGradeNotNull: boolean=false;
    for (let i in this.data) {
      for(let j in this.data[i].skills){
        for(let k in this.data[i].skills[j].tabs){
          if(this.data[i].skills[j].tabs[k].val){
            this.data[i].skills[j].grade=this.data[i].skills[j].tabs[k].key;
            if((this.data[i].skills[j].grade)!==0) {
              checkGradeNotNull=true;
            }
          }
        }
      }
    }
    if(!this.matricule && !checkGradeNotNull) {
      this.snackBar.open('Matricule manquant', 'Aucune compétence renseignée', {
        duration: 3000,
      });
    }
    else{
      if(!this.matricule) {
        this.snackBar.open('Le matricule n\'est pas renseigné', 'Matricule manquant', {
          duration: 3000,
        });
      }
      if(!checkGradeNotNull) {
        this.snackBar.open('Vous devez avoir au moins une compétence !', 'choisir au moins une compétence  ', {
          duration: 3000,
        });
      }
    }
  }
}

@Component({
  selector: 'app-snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
})
export class SnackBarOverviewExampleComponent {
  constructor(public snackBar: MatSnackBar) {}

}
