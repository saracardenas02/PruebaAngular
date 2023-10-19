import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPostsComponent } from './componentes/listar-posts/listar-posts.component';
import { CrearPostComponent } from './componentes/crear-post/crear-post.component';
import { EditarPostComponent } from './componentes/editar-post/editar-post.component';
import { CrearComentarioComponent } from './componentes/crear-comentario/crear-comentario.component';

const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo:'listar-posts'},
  {path:'listar-posts', component: ListarPostsComponent},
  {path:'crear-post', component: CrearPostComponent},
  {path:'editar-post/:id', component: EditarPostComponent},
  {path:'crear-comentario/:id', component:CrearComentarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
