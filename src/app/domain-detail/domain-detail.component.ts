import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../dto/domain';
import { MatRadioChange } from '@angular/material';


@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit {
  @Input() domain: Domain;

  constructor() { }

  ngOnInit() {

  }
  radioChange(event: MatRadioChange,skill) {
    skill.grade=event.value;

  }
}
