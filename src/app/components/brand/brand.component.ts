import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../modules/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

  brands : Brand[] = []
  currentBrand : Brand = {brandId:0,brandName:""}

  constructor(private brandService : BrandService){}

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=> {
      this.brands = response.data
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  clearCurrentBrand(){
    this.currentBrand = {brandId:0,brandName:""}
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return 'list-group-item active';

    }
    else{
      return 'list-group-item';
    }
    
}

getAllBrandClass() {
  if (this.currentBrand.brandId==0) {
    return 'list-group-item active';
  }
  return 'list-group-item';
}

}
