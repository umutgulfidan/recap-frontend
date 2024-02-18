import { Component, OnInit } from '@angular/core';
import { RentalDetailService } from '../../services/rental-detail.service';
import { RentalDetail } from '../../modules/rentalDetail';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrl: './rental-detail.component.css'
})
export class RentalDetailComponent implements OnInit {

  rentalDetails : RentalDetail[] = []

  constructor(private rentalDetailService:RentalDetailService){}
  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentalDetails = response.data
    });
  }
}
