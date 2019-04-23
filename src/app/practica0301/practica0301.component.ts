import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica0301',
  templateUrl: './practica0301.component.html',
  styleUrls: ['./practica0301.component.css']
})
export class Practica0301Component implements OnInit {
  showTable = false;
  productos = [
    { id: 1, nombre: 'Televisión', precio: 33000 },
    { id: 2, nombre: 'PS4', precio: 38000 },
    { id: 3, nombre: 'XBox', precio: 37900 },
    { id: 4, nombre: 'Laptop', precio: 45000 },
    { id: 5, nombre: 'DVD', precio: 2000 }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleTableVisualization() {
    this.showTable = !this.showTable;
  }

}
