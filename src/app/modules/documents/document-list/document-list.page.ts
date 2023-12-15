import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, receiptOutline, createOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.page.html',
  styleUrls: ['./document-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DocumentListPage implements OnInit {

  documentList = [
    {
      date: '2020-01-01',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Yesid Herrera Doria',
      amount: -1000000,
    },
    {
      date: '2020-01-01',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Marisel Cuartas Cardona',
      amount: 582000,
    },
    {
      date: '2020-01-02',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Cristian Camilo Perez',
      amount: 600000,
    },
    {
      date: '2020-01-03',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Arnoldo de Jesús Estrada',
      amount: 1541210,
    },
    {
      date: '2020-01-04',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Empresas públicas de Medellín',
      amount: -14000,
    },
    {
      date: '2020-01-04',
      documentType: 'Factura de venta',
      documentNumber: '001',
      subject: 'Yesid Herrera Doria',
      amount: 98465500,
    }
  ];

  documentListFiltered = signal(this.documentList);
  documentDateGroups =  computed(() => new Set([...this.documentListFiltered().map((item) => item.date)]));

  constructor() {
    addIcons({
      add,
      receiptOutline,
      createOutline, trashOutline
    });
  }

  ngOnInit() {
  }

  handleFilter(event: any) {
    const filter = event.detail.value.toLocaleLowerCase();
    const updated = this.documentList.filter((item) => {
      return (item.date + item.documentNumber + item.subject + item.documentType).toLocaleLowerCase().includes(filter);
    });
    this.documentListFiltered.set(updated);
  }

}
