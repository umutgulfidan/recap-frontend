import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { Customer } from '../../modules/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customers : Customer[] = []
constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data
    })
  }
}
