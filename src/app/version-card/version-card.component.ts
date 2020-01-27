import {Component, Input, OnInit} from '@angular/core';
import {Resource} from "../models/Resource";

@Component({
  selector: 'app-version-card',
  templateUrl: './version-card.component.html',
  styleUrls: ['./version-card.component.sass']
})
export class VersionCardComponent implements OnInit {

  @Input("resource")
  public resource: Resource;

  @Input("latest")
  public latest: boolean;

  constructor() { }

  ngOnInit() {
  }

}
