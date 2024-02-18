import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../modules/carDetail';
import { CarService } from '../../services/car.service';
import { CarDetailService } from '../../services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {

  carDetails : CarDetail[]= []

  constructor(private carDetailService:CarDetailService){}

  ngOnInit(): void {
    this.getCarDetails()
  }


  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails= response.data
    })
  }
}
