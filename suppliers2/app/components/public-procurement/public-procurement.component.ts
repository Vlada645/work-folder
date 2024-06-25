import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-procurement',
  templateUrl: './public-procurement.component.html',
  styleUrl: './public-procurement.component.scss'
})
export class PublicProcurementComponent {
  @Input() publicProcurementInfo: any = {};
}
