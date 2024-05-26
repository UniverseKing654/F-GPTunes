# 🗓️ GPTunes

## ⚙️ Setup

`yarn dev`: Para inicializar el servidor del frontend  
`yarn install`: Instalar dependencias

## 📝 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

La especificacion *Conventional Commits* es una convencion acerca de los mensajes de cada commit. El mensaje de cada commit deberia seguir la siguiente estructura

```
<tipo>[extension opcional]: <descripcion>

[cuerpo opcional]

[pie opcional]
```

Donde el tipo puede ser:

- `build`: Cambios que afectan la compilacion o las dependencias (como npm o yarn)
- `docs`: Cambios en la documentacion
- `feat`: Nuevas features
- `fix`: Arreglo de bugs
- `perf`: Codigo que mejora el rendimiento
- `refactor`: Codigo que no añade features ni arregla bugs
- `style`: Cambios que no afectan el significado del codigo (espacios, formatear, semicolon, etc)
- `test`: Añadir test faltantes o corregir test existentes


## 🔀 [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20an%20alternative%20Git,lived%20branches%20and%20larger%20commits.)

La estructura que usara en las branches es:

- `main`: La branch principal, aqui deberia estar la version lista para la entrega obtenida despues de hacer merge con `release`
- `develop`: La branch donde se hace el desarrollo de la aplicacion, de esta branch deben surgir las `feature` branches y cuando esta feature este lista se hace merge de vuelta a develop
- `release`: Esta branch surge desde `develop` y se enfoca en pulir la version que se va a entregar con todas las features incluidas, por lo que a esta branch NO se le puede añadir features (se pueden incluir cambios del estilo fix, docs, style, etc)
- `hotfix`: Branch que surge desde `main` cuyo unico proposito es parchear algun bug imprevisto en main
- `feature`: Branches que surgen desde `develop` donde se desarrolla una feature.