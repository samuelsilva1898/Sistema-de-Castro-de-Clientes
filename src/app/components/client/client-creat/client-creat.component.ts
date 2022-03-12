import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Clients } from '../client.model';


@Component({
  selector: 'app-client-creat',
  templateUrl: './client-creat.component.html',
  styleUrls: ['./client-creat.component.css']
})
export class ClientCreatComponent implements OnInit {

  client: Clients = {
    nome:'',
    idade: null,
    endereco:''
  }

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

createClient(): void {

  this.clientService.create(this.client).subscribe(()=>{
    this.clientService.showMessage('Clente adicionado!')
    this.router.navigate(['./clientes'])
  })

}

  cancel(): void {
    this.router.navigate(['./clientes'])
    }
}
