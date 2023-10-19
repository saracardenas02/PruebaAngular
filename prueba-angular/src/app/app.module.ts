import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarPostsComponent } from './componentes/listar-posts/listar-posts.component';
import { CrearPostComponent } from './componentes/crear-post/crear-post.component';
import { EditarPostComponent } from './componentes/editar-post/editar-post.component';
import { CrearComentarioComponent } from './componentes/crear-comentario/crear-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPostsComponent,
    CrearPostComponent,
    EditarPostComponent,
    CrearComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
