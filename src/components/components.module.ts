import { NgModule } from '@angular/core';
import { HomeHeadComponent } from './home/head/head.component';
import { HomeEntityComponent } from './home/entity/entity.component';
@NgModule({
	declarations: [HomeHeadComponent,
    HomeEntityComponent],
	imports: [],
	exports: [HomeHeadComponent,
    HomeEntityComponent]
})
export class ComponentsModule {}
