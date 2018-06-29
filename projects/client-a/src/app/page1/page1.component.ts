import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>Client A - Page 1</h1>
    <product-view></product-view>
  `
})
export class Page1Component  {

  control = new FormControl();
}
