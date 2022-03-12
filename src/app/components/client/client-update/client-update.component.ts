import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {



  cclient: Clients

  client: Clients = {
    nome: '',
    idade: null,
    endereco: ''
  }

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(cclient => {
      this.cclient = cclient
    });
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(["/clientes"])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
