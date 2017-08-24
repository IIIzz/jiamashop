import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
    showSearchPage: boolean;
    searchQuery: string;
    items: string[];
    constructor(public navCtrl: NavController) {
      this.searchQuery = '';
      this.showSearchPage = false;
      this.initializeItems();
    }
    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
      ];
    }
    getItems(searchbar) {
      //给作用域 items 一个默认值。
      this.initializeItems();
      //获取文本框里的 value
      var q = searchbar.data;
      //如果值是空字符串，则不过滤项目
      if (!q||q.trim() == '') {
        return;
      }
      //否则 过滤一下 this.items
      this.items = this.items.filter((v) => {
        if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      })
    }
  }
