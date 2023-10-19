import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {

  formularioPosts:FormGroup;
  elId: any;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador: Router,
    private activatedRoute:ActivatedRoute,
  ){

    this.elId = this.activatedRoute.snapshot.paramMap.get('id');

    this.formularioPosts = this.formulario.group({
      title:[''],
      body:[''],
    })

    this.crudService.obtenerPost(this.elId).subscribe((res)=>{
      console.log(res);
      let Post = res as any;
      this.formularioPosts.setValue({
        title:Post['title'],
        body:Post['body'],
      })
    })

  }

  ngOnInit(): void {

  }

  enviarDatos():any{
    this.crudService.crearPost(this.formularioPosts.value).subscribe(res=>{
      console.log(res);
      window.alert('Edited');
      this.ruteador.navigateByUrl('/listar-posts');
    })
  }

}
