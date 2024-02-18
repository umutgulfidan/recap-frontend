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
constructor(private colorService:ColorService){}

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
}
