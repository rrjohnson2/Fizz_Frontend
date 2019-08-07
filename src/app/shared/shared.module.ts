import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice/notice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NoticeComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NoticeComponent]
})
export class SharedModule { }
