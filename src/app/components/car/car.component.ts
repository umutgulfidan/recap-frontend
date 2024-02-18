import { Component, OnInit } from '@angular/core';
import { Car } from '../../modules/car';
import { CarService } from '../../services/car.service';
import { CarDetailService } from '../../services/car-detail.service';
import { CarDetail } from '../../modules/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  cars : Car[] = []

  constructor(private carService :CarService){}
  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }


  
}
