import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit{

  formularioPosts:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador: Router,
  ){

    this.formularioPosts = this.formulario.group({
      title:[''],
      body:[''],
    })

  }

  ngOnInit(): void {

  }

  enviarDatos():any{
    console.log(this.formularioPosts.value);

    this.crudService.crearPost(this.formularioPosts.value).subscribe(res=>{
      console.log(res);
      window.alert('Created!');
      this.crudService.addPost(this.formularioPosts.value);
      this.ruteador.navigateByUrl('/listar-posts');

    })



  }

}
