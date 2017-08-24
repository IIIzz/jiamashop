

import { RouterModule } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { NewPage } from '../pages/new/new';
import { TaoPage } from '../pages/tao/tao';
import { SearchPage } from '../pages/search/search';
import { UserCenterPage } from '../pages/userCenter/userCenter';


export const RouterInfo = RouterModule.forRoot([
      {path:'', redirectTo: '/home', pathMatch: 'full', outlet:'app'},
      {path:'home', component: HomePage, outlet:'app'},
      {path:'new', component: NewPage, outlet:'app'},
      {path:'haitao', component: TaoPage, outlet:'app'},
      {path:'search', component: SearchPage, outlet:'app'},
      {path:'usercenter', component: UserCenterPage, outlet:'app'}
])