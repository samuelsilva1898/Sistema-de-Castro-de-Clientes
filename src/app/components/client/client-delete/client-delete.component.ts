import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  cclient: Clients

  client: Clients = {
    nome:'',
    idade: null,
    endereco:''
  }

  constructor(private clientService: ClientService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.clientService.readById(id).subscribe(cclient => {
    this.client = cclient
  })
}
  deleteClient(): void {
    this.clientService.delete(this.client.id).subscribe(() =>{
      this.clientService.showMessage("Produto excluido com sucesso!")
    this.router.navigate(["/clientes"])
  })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
