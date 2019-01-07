import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchMainComponent } from './search-main/search-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchMainComponent, SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbModule
  ]
})
export class SearchModule { }
