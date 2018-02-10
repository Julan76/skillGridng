import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../dto/domain';

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

}
