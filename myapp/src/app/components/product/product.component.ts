import { Component, OnInit } from '@angular/core';
//import { Product } from "../../interfaces/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //data: Product[] = []
  public data = [];
  public errorMsg;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //this.data = this.productService.getData();
    this.productService.getData().subscribe(data => this.data = data, error => this.errorMsg = error);
  }

}
