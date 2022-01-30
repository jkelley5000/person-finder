import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { AppService } from '../app.service';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  persons: Array<any> = [];
  searchValue: string = '';

  constructor(
    private searchService: SearchService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.searchService.searchValue$.subscribe(value => {
      if (value) {
        this.searchValue = value;
      }
    });
    this.appService.getPersons()
      .subscribe((data: any) => {
        if (data) {
          this.persons = data;
        }
      });
  }

  ngOnDestroy() {
    this.searchService.searchValue$.unsubscribe();
    // this.appService.unsubscribe();
  }

}
