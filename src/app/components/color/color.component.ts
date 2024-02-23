import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { Color } from '../../modules/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
  
colors:Color[] = []
currentColor:Color = {colorId:0,colorName:""}
constructor(private colorService:ColorService){}


  ngOnInit(): void {
    this.getColors();
  }

  setCurrentColor(color:Color){
    this.currentColor = color
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
  clearCurrentColor(){
    this.currentColor = {colorId:0,colorName:""}
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return 'list-group-item active';

    }
    else{
      return 'list-group-item';
    }
    
}

getAllColorClass() {
  if (this.currentColor.colorId==0) {
    return 'list-group-item active';
  }
  return 'list-group-item';
}


}
