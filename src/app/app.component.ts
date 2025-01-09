import { Component } from '@angular/core';

import { EventoService } from './evento.service';
import Swal from 'sweetalert2';

interface Evento {
  firstName: string;
  lastName: string;
  attendance: string;
  attendees: number;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'invitacion-estandar';
   constructor(private eventoService: EventoService) {}
  
    openSaveDialog() {
      Swal.fire({
        title: 'Detalles del evento',
        html: this.getFormHtml(),
        showDenyButton: true,
        denyButtonText: 'No guardar',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        preConfirm: this.validateForm
      }).then((result) => {
        if (result.isConfirmed) {
          this.saveFile(result.value as Evento);
        }
      });
    }
  
    private getFormHtml(): string {
      return `
        <div class="mb-4 flex flex-col justify-center items-center">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre:</label>
          <input id="first-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">
        </div>
        <div class="mb-4 flex flex-col justify-center items-center">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido:</label>
          <input id="last-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">
        </div>
        <div class="mb-4 flex flex-col justify-center items-center">
          <label class="block text-sm font-medium text-gray-700">Asistencia:</label>
          <div class="flex items-center">
            <input type="radio" id="yes" name="attendance" value="yes" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
            <label for="yes" class="ml-2 block text-sm font-medium text-gray-700">Sí</label>
          </div>
          <div class="flex items-center mt-2">
            <input type="radio" id="no" name="attendance" value="no" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
            <label for="no" class="ml-2 block text-sm font-medium text-gray-700">No</label>
          </div>
        </div>
      `;
    }
  
    private validateForm(): Evento | false {
      const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
      const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
      const attendance = (document.querySelector('input[name="attendance"]:checked') as HTMLInputElement)?.value;
      
      if (!firstName || !lastName || !attendance) {
        Swal.showValidationMessage('Por favor complete todos los campos');
        return false;
      }
  
      return { firstName, lastName, attendance, attendees: 1 };
    }
  
    private async saveFile(data: Evento) {
      try {
        this.showLoading();
        await this.eventoService.createEvento(data).toPromise();
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        Swal.close();
        this.showError('Ocurrió un problema al guardar los datos.');
      }
    }
  
    private showLoading() {
      Swal.fire({
        title: 'Guardando...',
        html: 'Por favor espere mientras se guardan los datos.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });
    }
  
    private showError(message: string) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        showConfirmButton: true
      });
    }
}
