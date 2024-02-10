# Página web de Personajes de Harry Potter

Este proyecto consiste en desarrollar una página web con un listado de personajes de Harry Potter, que se pueden filtrar por nombre , por casa y genero. Se utilizará React,Sass y html, para su implementación.

## Funcionalidades principales:

- **Listado de personajes**: Utilización del servicio [HP-API](https://hp-api.onrender.com/) para obtener información sobre los personajes de Harry Potter. Mostrando su foto, nombre y especie de cada personaje. Manejo del caso en que algunos personajes no tengan imagen, utilizando una imagen de relleno.

- **Filtrado de personajes por nombre**: Se ha agregado un campo de texto que permita buscar personajes por nombre. Al ir escribiendo, se mostrarán solo los personajes cuyo nombre contiene las letras escritas.

- **Filtrado de personajes por casa**: Se ha agregado un select para filtrar personajes por casa. Por defecto, al cargar la página, se mostrarán los personajes de la casa Gryffindor.

- **Filtrado por genero**: Se a agregado input de tipo radio, para poder filtar tambien por genero.

Cabe destacar que los filtros van, en conjunto, para una mejor experiencia de usuario.

- **Detalle de personajes**: Al hacer clic en la tarjeta de un personaje, se mostrará su información completa, incluyendo foto, nombre, casa, estado (vivo o muerto), género, especie y nombres alternativos. Se utilizarán rutas y React Router DOM para esta funcionalidad.

## Detalles de calidad:

- Utilización de etiquetas semánticas como `<form />` para el campo de texto.
- Impedimento de la navegación o cambio de ruta al pulsar "Enter" en el campo de filtrado.
- Mostrado de un mensaje si no se encuentra ningún personaje que coincida con la búsqueda.
- Realización del filtro sin importar si el texto está en mayúsculas o minúsculas.
- Mantenimiento del texto del campo de filtrado al volver atrás desde el detalle de un personaje.

## Mejoras visuales :

- cada personaje al hacer click en una tarjeta, muesta su estado (vivo o muerto) con su respectivo icono en el detalle del personaje.
- Con Sass se ha dado funcionamiento responsive en dispositivos pequeños, adaptandose a su vez, a distintos tipos de pantalla, para una mejor experiencia de usuario.

## Repositorio en GitHub:

El código fuente de este proyecto está disponible en el siguiente repositorio de GitHub: [https://github.com/Adalab/modulo-3-evaluacion-final-gabriela-ppv](https://github.com/gabriela-ppv/modulo-3-evaluacion-final-gabriela-ppv)

Este proyecto proporciona una oportunidad para practicar React, Sass, html, javaScript y mejorar las habilidades de desarrollo web, así como implementar mejoras visuales y funcionalidades adicionales.

si tienes alguna sugerencia, duda o mejora, no dudes en escribir.
