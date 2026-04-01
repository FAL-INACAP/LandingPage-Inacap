# 🎮 Xbox Store – Landing Page (Proyecto Académico)

Landing page ficticia desarrollada como proyecto académico. Simula una tienda en línea de mandos oficiales de Xbox y promociona la consola Xbox Series X|S mediante ofertas especiales (como la edición _Resident Evil Requiem_) y el servicio Game Pass.

**Nota:** Todos los productos, precios y ofertas son inventados. Este sitio no representa una tienda real ni tiene fines comerciales.

---

## ✨ Características Principales

- **Navbar fijo** con menú responsive y botón de compra.
- **Hero section** con imagen de fondo, título destacado, llamadas a la acción y badges de compatibilidad.
- **Sección Beneficios** con tarjetas animadas que resaltan ventajas clave.
- **Catálogo de Productos** con tres modelos de mandos, incluyendo etiquetas (“Más vendido”, “Premium”, “Wireless”) y precios.
- **Promoción exclusiva** de _Resident Evil Requiem_: oferta de edición especial al comprar cualquier consola Xbox Series X|S, con badges, lista de beneficios y botón de compra.
- **Sección Game Pass** con imagen de fondo, llamado a la suscripción a Xbox Game Pass Ultimate, destacando sus ventajas.
- **Formulario de Newsletter** con campos de nombre, correo, juego favorito y checkbox de aceptación. Al enviar, muestra una alerta de éxito (si se implementa en `script.js`).
- **Footer** con enlaces a secciones internas, juegos destacados, soporte y redes sociales.
- **Diseño Responsivo** que se adapta a móviles, tablets y escritorio.
- **Efectos Visuales**: gradientes, sombras, transiciones, desenfoque (`backdrop-filter`) y tarjetas con hover.

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona o descarga los archivos del repositorio.
2. Asegúrate de que la estructura de carpetas se mantenga (especialmente la carpeta `img/` con las imágenes).
3. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, etc.).
4. No se requiere servidor local, ya que es HTML/CSS/JS puro.

> **Nota**: Si no dispones de las imágenes originales, puedes reemplazar las rutas en el código HTML con imágenes placeholder o crear la carpeta `img/` con archivos de prueba. Para el correcto funcionamiento del formulario, asegúrate de que `script.js` contenga la lógica de envío.

---

## 🎨 Decisiones de Diseño y Técnicas Implementadas

- **Variables CSS**: Se definieron colores principales (`--xbox-green-dark`, `--xbox-green-light`, `--xbox-yellow`, `--xbox-black`) para mantener consistencia y facilitar cambios.
- **Background Glow**: Se utilizan elementos `div` con desenfoque para dar profundidad al fondo.
- **Hero con imagen de fondo**: La imagen se aplica mediante `<img>` con `object-fit: cover` para cubrir toda la sección.
- **Tarjetas de Beneficios y Productos**: Fondo con gradiente semitransparente, borde con color verde, y efectos hover que elevan la tarjeta y cambian el borde.
- **Sección promocional de Resident Evil**: Uso de imagen de fondo con `filter: brightness()`. La tarjeta tiene fondo semitransparente en promocion del juego.
- **Sección Game Pass**: Carta con imagen de fondo y overlay oscuro, botón destacado y texto descriptivo.
- **Responsive Design**: Media queries que ocultan elementos flotantes en móvil, ajustan tamaños de fuente y modifican el comportamiento de las secciones promocionales.
- **Formulario con validación**: Los campos incluyen atributos `required` y se espera que JavaScript maneje el envío sin recargar la página, mostrando una alerta de éxito.

Las imágenes utilizadas son de uso educativo y pertenecen a sus respectivos propietarios (Microsoft, Xbox). No se persigue ningún fin comercial.

## 📄 Licencia

Este proyecto es de carácter académico y no cuenta con una licencia de uso comercial. Puede ser utilizado con fines educativos y de aprendizaje.

---

## 👥 Créditos

- **Desarrollador**: Fidel Alarcon Leiva
- **Docente**: Patricio Araya Castro
- **Institución**: INACAP Maipú – Ingeniería en Informática
- **Año**: 2026
