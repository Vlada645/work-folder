import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent {
  @Input() info: any = {};
  @Input() filterWWBParent: any = {};
  // @Input() content: any[] = [];
  visibleItems: number = 4;
  filteredWWBItems: any = '';

  ngOnInit(): void {
    if (this.info && this.info.whatWeBuy && this.info.whatWeBuy.content) {
      this.filterWWBParent = this.info.whatWeBuy.content.slice(0, this.visibleItems);
    }
  }
  showMore() {
    if (this.visibleItems < this.info.whatWeBuy.content.length) {
      this.visibleItems += 4;
    }
    this.filterWWBParent = this.info.whatWeBuy.content.slice(0, this.visibleItems)
  }
}
