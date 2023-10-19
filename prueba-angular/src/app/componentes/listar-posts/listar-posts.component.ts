import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit{

  Posts:any;

  constructor(
    private crudService: CrudService,
  ){

  }

  ngOnInit(): void {

    this.crudService.listarPosts().subscribe(res=>{
      this.Posts = res;
      this.crudService.posts$.subscribe(post => {
        console.log(post);
        this.Posts.push(post);
      });
    })


  }

  borrarRegistro(id:any, iContol:any):any{
    if(window.confirm('Delete?')){
      this.crudService.borrarPost(id).subscribe(res=>{
        console.log(res);
        this.Posts.splice(iContol,1);
      })
    }

  }

}
