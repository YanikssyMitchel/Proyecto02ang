import { Component } from '@angular/core';
import { Country, PaisesService } from '../../servicios/paises.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-regiones',
  standalone: false,
  templateUrl: './regiones.component.html',
  styleUrl: './regiones.component.css'
})
export class RegionesComponent {
  paises: Country[] = [];
  PaisSeleccionado: Country | null = null;
  Buscar: string = '';
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 
  regionSeleccionada: string = 'Americas'; 

  constructor(private paisesService: PaisesService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.cargarPaises();
  }

 
  cargarPaises(): void {
    this.paisesService.obtenerPaisesporRegion(this.regionSeleccionada).subscribe((data: Country[]) => {
      this.paises = data;
    });
  }

  
  BuscarPaises(): void {
    if (this.Buscar.trim() !== '') {
      this.paisesService.BuscarPais(this.Buscar).subscribe((data: Country[]) => {
        this.paises = data;
      });
    } else {
      this.cargarPaises();
    }
  }

  
  cambiarRegion(): void {
    this.cargarPaises();
  }

 
  AbrirModal(content: any, country: Country): void {
    this.PaisSeleccionado = country;
    this.modalService.open(content);
  }
}
