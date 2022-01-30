import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  setSearchValueInService(event: any) {
    const inputSearchValue = event.target.value;
    this.searchService.searchValue$.next(inputSearchValue);
  }

}
