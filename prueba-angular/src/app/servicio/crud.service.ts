import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Post } from './Post';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API:string = 'https://jsonplaceholder.typicode.com/posts/'
  API2:string = 'https://jsonplaceholder.typicode.com/comments/'

  constructor(
    private clienteHttp:HttpClient,
  ) { }


  crearPost(datosPost:Post):Observable<any>{
    return this.clienteHttp.post(this.API, datosPost);
  }

  listarPosts(){
    return this.clienteHttp.get(this.API);
  }

  borrarPost(id:any):Observable<any>{
    return this.clienteHttp.delete(this.API+id);
  }

  obtenerPost(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+id);
  }

  editarPost(id:any, datosPost:Post):Observable<any>{
    return this.clienteHttp.patch(this.API+id, datosPost);
  }

  crearComentario(id:any,datosComentario:Comment):Observable<any>{
    return this.clienteHttp.post(this.API2+'?postId='+id, datosComentario);
  }

    private postsSubject = new BehaviorSubject<any[]>([]);
    public posts$ = this.postsSubject.asObservable();

    addPost(post: any) {
      const currentPosts = this.postsSubject.getValue();
      this.postsSubject.next([...currentPosts, post]);
    }

}
