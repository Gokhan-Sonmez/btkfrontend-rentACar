import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { ColorListModel } from 'src/app/models/colorListModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:ColorListModel[] = []
  dataLoaded: boolean = false
  currentColor: ColorListModel;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor()
  }

  getColor(){
    this.colorService.getColors().subscribe(response =>{
      this.dataLoaded = false;
      this.colors = response.data;
      this.dataLoaded = true;
    })

}

setCurrentColor(color: ColorListModel) {
  this.currentColor = color;
}
getColorClass(color: ColorListModel) {
  if (color == this.currentColor) {
    return 'list-group-item active';
  } else {
    return 'list-group-item';
  }
}
getAllColorClass() {
  if (!this.currentColor) {
    return 'list-group-item active';
  } else {
    return 'list-group-item';
  }
}
}
