import {Asset} from "./Asset";

export class Resource {

  public name: string;
  public tag_name: string;
  public id: number;
  public url: string;

  public assets: Asset[];
}
