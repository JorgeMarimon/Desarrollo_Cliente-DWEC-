import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  products: Product[] = [
    new Product('FANT001', 'Harry Potter y la piedra filosofal por J.K. Rowling', 25, 15.99),
    new Product('FANT002', 'Cazadores de Sombras: Ciudad de Hueso por Cassandra Clare', 18, 22.95),
    new Product('SCI001', 'Fundación por Isaac Asimov', 12, 30.90),
    new Product('SCI002', 'El fin de la eternidad por Isaac Asimov', 8, 25.95),
    new Product('FANT003', 'El nombre del viento por Patrick Rothfuss', 15, 2.990)
  ];

  newProduct: Product = new Product('', '', 0, 0);

  deleteProduct(product: Product): void {
    this.products.forEach((element, index) => {
      if (element === product) {
        this.products.splice(index, 1);
      }
    });
  }

  selectProduct(product: Product): void {
    this.newProduct = { ...product };
  }

  toAdd() {
    var isCodeUnique = this.products.find(element => element.code === this.newProduct.code);

    if (this.newProduct.code !== '0' && !isCodeUnique && this.newProduct.code) {
      this.products.push(this.newProduct);
      this.newProduct = new Product('', '', 0, 0);
    } else {
      alert('El código no es único, es igual a "0" o es inexistente.');
    }
  }

  modify() {
    var codeFound = this.products.find(element => element.code === this.newProduct.code);
    var productIndex = this.products.findIndex(element => element.code === this.newProduct.code);
    if (codeFound) {
      this.products[productIndex].description = this.newProduct.description
      this.products[productIndex].quantity = this.newProduct.quantity
      this.products[productIndex].price = this.newProduct.price
      alert('Producto ' + codeFound.code + ' modificado')
    } else {
      alert('El código no coincide con ningún artículo de la base de datos')
    }
  }

}
