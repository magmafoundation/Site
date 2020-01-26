import {Component, OnInit} from '@angular/core';
import {VersionService} from "./services/version.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Magma-Site';
  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.versionService.fetchVesions().then(value => {
      console.log(value)
    })
  }


}
