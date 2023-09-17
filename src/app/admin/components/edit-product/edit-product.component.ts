import { Component, Input, inject } from '@angular/core';
import { CanComponentDeactivate, DialogService } from 'src/app/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements CanComponentDeactivate {
  @Input({ required: true })
  productFromResolver!: ProductModel;
  
  private dialogService = inject(DialogService);

  canDeactivate() {
    if (new Date().getMinutes() % 2 == 0)
      return true;

    return this.dialogService.confirm("Current minutes are odd. Are you sure you want to leave?");
  }  
}
