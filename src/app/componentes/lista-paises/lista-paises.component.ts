import { Component, OnInit } from '@angular/core';
import { Country, PaisesService } from '../../servicios/paises.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lista-paises',
  standalone: false,
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})

export class ListaPaisesComponent {
  paises: Country[] = [];
  Buscar: string = '';
  PaisSeleccionado: Country | null = null;

  constructor(private PaisesService: PaisesService, private modalService: NgbModal) {}

  ngOnInit(): void {
    // Obtener todos los países cuando el componente se inicie
    this.PaisesService.ObtenerPaises().subscribe((data) => {
      this.paises = data;
    });
  }

  // Método para filtrar países según el texto de búsqueda
  BuscarPaises(): void {
    if (this.Buscar) {
      this.PaisesService.BuscarPais(this.Buscar).subscribe((data) => {
        this.paises = data;
      });
    } else {
      this.PaisesService.ObtenerPaises().subscribe((data) => {
        this.paises = data;
      });
    }
  }

  // Método para abrir el modal con la información del país seleccionado
  AbrirModal(content: any, country: Country): void {
    this.PaisSeleccionado = country;
    this.modalService.open(content, { size: 'lg' });
  }

  
}
