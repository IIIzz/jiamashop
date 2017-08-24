import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NewPage } from '../new/new';
import { SearchPage } from '../search/search';
import { TaoPage } from '../tao/tao';
import { UserCenterPage } from '../userCenter/userCenter';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewPage;
  tab3Root = TaoPage;
  tab4Root = SearchPage;
  tab5Root = UserCenterPage;

  constructor() {

  }
}
