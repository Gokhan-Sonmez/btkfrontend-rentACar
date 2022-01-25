import { ColorService } from './../../../services/color.service';
import { ColorListModel } from './../../../models/colorListModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  colors: ColorListModel[];
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();
    this.getColors();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  addColor() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);

      this.colorService.addColor(colorModel).subscribe((response) => {
        setTimeout(function () {
          location.reload();
        }, 100);
      });
    } else {
    }
    setTimeout(function () {
      location.reload();
    }, 100);
  }

  deleteColor(color: ColorListModel) {
    this.colorService.deleteColor(color).subscribe((response) => {});
    setTimeout(function () {
      location.reload();
    }, 100);
  }

  updateColor(color: ColorListModel) {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      colorModel.id = color.id;
      this.colorService.updateColor(colorModel).subscribe((response) => {
        setTimeout(function () {
          location.reload();
        }, 100);
      });
    }
  }
}
