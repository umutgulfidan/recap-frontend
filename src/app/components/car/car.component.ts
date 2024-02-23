import { Component, OnInit } from '@angular/core';
import { Car } from '../../modules/car';
import { CarService } from '../../services/car.service';
import { CarDetailService } from '../../services/car-detail.service';
import { CarDetail } from '../../modules/carDetail';
import { Brand } from '../../modules/brand';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  carDetails : CarDetail[]= []
  dataLoaded:boolean = false;


  constructor(private carDetailService :CarDetailService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarDetailsByColorId(params["colorId"])
      }
      else{
        this.getCarDetails();
      }
    })
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails= response.data
      this.dataLoaded=true
    })
  }
  getCarDetailsByBrandId(brandId:number){
    this.carDetailService.getCarDetailsByBrandId(brandId).subscribe(response=>{
      this.carDetails= response.data
      this.dataLoaded=true
    })
  }
  getCarDetailsByColorId(colorId:number){
    this.carDetailService.getCarDetailsByColorId(colorId).subscribe(response=>{
      this.carDetails= response.data
      this.dataLoaded=true
    })
  }

  getCarImagePath(carDetail: CarDetail): string {
    if (carDetail.carImages && carDetail.carImages.length > 0) {
      return 'https://localhost:44310/Uploads/Images/' + carDetail.carImages[0].imagePath;
    } else {
      // Default resim yolu
      return 'https://localhost:44310/Uploads/Images/DefaultCarImage.jpg';
    }
  }



  
}
