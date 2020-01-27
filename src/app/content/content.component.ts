import { Component, OnInit } from '@angular/core';
import {Resource} from "../models/Resource";
import {VersionService} from "../services/version.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor(private versionService: VersionService) { }

  resources: Resource[];


  ngOnInit() {
    this.versionService.fetchVesions().then(value => this.resources = value.splice(0, 9));
  }

}
