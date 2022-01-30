import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class SearchService {
  public searchValue$ = new Subject<string>();

}
