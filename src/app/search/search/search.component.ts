import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  public list$: Observable<any>;
  public page: number;
  private pageSize = 10;
  @Input() dataProvider: any;
  @Input() link: string;
  @ViewChild('searchInput') input: ElementRef;

  constructor() { }

  ngOnInit() {
    this.page = 1;
  }

  ngAfterViewInit() {
    this.list$ = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup').pipe(
      map(event => event.target['value']),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap(searchText => this.dataProvider.getAll(searchText))
    );
  }

  paginatedList(list: Array<any>, page: number, totalItems) {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, totalItems - 1);
    return list.slice(startIndex, endIndex + 1);
  }
}
