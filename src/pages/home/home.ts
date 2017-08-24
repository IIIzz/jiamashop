import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlide') mySlide: Slides;
  constructor(public navCtrl: NavController) {

  }

  // 切换后 再进入首页轮播图会卡顿， 先停掉再重新跑
  ionViewWillLeave(){
    this.mySlide.stopAutoplay();
  }
  ionViewDidEnter(){
    this.mySlide.stopAutoplay();
    this.mySlide.stopAutoplay();
    this.mySlide.startAutoplay();
  }

  // 点击轮播图时事件
  goToSlide() {
    console.log(this.mySlide.getActiveIndex() + '----获取当前幻灯片的索引。')
    console.log(this.mySlide.getPreviousIndex() + '----获取上一个幻灯片的索引。')

    // 这三个有意思
    console.log(this.mySlide.length() + '----获取幻灯片的总数。')
    console.log(this.mySlide.isEnd() + '----该幻灯片是最后一个。')
    console.log(this.mySlide.isBeginning() + '----该幻灯片不是第一个。')
  }
  slidesObj = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "http://omsproductionimg.yangkeduo.com/images/2017-08-11/ab6f7f7201ce424b33aff2337c11028f.jpeg@750w_1l_50Q.webp",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://omsproductionimg.yangkeduo.com/images/2017-08-13/f6ad098a35f306562a23dcabe5e68980.jpeg@750w_1l_50Q.webp",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://omsproductionimg.yangkeduo.com/images/2017-08-01/d7be54044c6df5c088478c5ec9b43957.jpeg@750w_1l_50Q.webp",
    }
  ];
}
