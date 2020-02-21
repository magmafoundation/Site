import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resource} from '../models/Resource';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private httpClient: HttpClient) {
  }

  public async fetchVesions(version: string): Promise<Resource[]> {
    return await this.httpClient.get<Resource[]>(`http://api.magmafoundation.org/api/resources/magma/${version}/dev`).toPromise();
  }
}
