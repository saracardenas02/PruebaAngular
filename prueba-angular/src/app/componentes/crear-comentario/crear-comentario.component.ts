import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.component.html',
  styleUrls: ['./crear-comentario.component.css']
})
export class CrearComentarioComponent implements OnInit{

  formularioComentario: FormGroup;
  elId: any;

  constructor(
    public formulario: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador: Router,
  ){

    //Obtener el id del post para enviarlo al servicio.
    this.elId = this.activatedRoute.snapshot.paramMap.get('id');

    this.formularioComentario = formulario.group({
      name:[''],
      body:[''],
    })

  }

  ngOnInit(): void {

  }

  enviarDatos():any{

    console.log(this.formularioComentario.value);

    this.crudService.crearComentario(this.elId, this.formularioComentario.value).subscribe(res=>{
      console.log(res);
      window.confirm('Add!');
      this.ruteador.navigateByUrl('/listar-posts');
    })



  }

}
