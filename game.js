/* ── DATA ─────────────────────────────────────────── */

const LEVELS = [
  {
    id: 1,
    title: '¿Qué es HTML?',
    icon: '🌐',
    xp: 100,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 01',
      title: 'HTML · El lenguaje de la web',
      body: 'HTML (<em>HyperText Markup Language</em>) es el lenguaje que da <strong>estructura</strong> a las páginas web. No es programación — es <strong>marcado</strong>: etiquetas que le dicen al navegador qué es cada cosa.',
      code:
`&lt;!-- Esto es un comentario HTML --&gt;
&lt;h1&gt;Hola mundo&lt;/h1&gt;
&lt;p&gt;Este es un párrafo.&lt;/p&gt;
&lt;img src="foto.jpg" alt="Foto"&gt;`,
      tip: '💡 Las etiquetas van entre &lt; y &gt;. La mayoría tienen apertura y cierre: &lt;p&gt;...&lt;/p&gt;'
    },
    questions: [
      {
        q: '¿Qué significan las siglas HTML?',
        opts: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyper Transfer Media Link'],
        correct: 0,
        explain: 'HTML = HyperText Markup Language. Es el lenguaje de marcado de hipertexto que estructura la web.'
      },
      {
        q: '¿Cuál es la función principal de HTML?',
        opts: ['Dar colores y estilos a la página', 'Estructurar el contenido de la página', 'Programar la lógica del servidor', 'Gestionar bases de datos'],
        correct: 1,
        explain: 'HTML define la estructura. CSS añade los estilos y JavaScript la interactividad.'
      }
    ]
  },
  {
    id: 2,
    title: 'Estructura básica',
    icon: '🏗️',
    xp: 110,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 02',
      title: 'El esqueleto de toda página',
      body: 'Todo documento HTML tiene una estructura mínima obligatoria. El navegador la necesita para interpretar la página correctamente.',
      code:
`&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Mi Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hola&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
      tip: '💡 &lt;head&gt; contiene info para el navegador (no visible). &lt;body&gt; contiene lo que ve el usuario.'
    },
    questions: [
      {
        q: '¿Dónde va el contenido visible de la página?',
        opts: ['En &lt;head&gt;', 'En &lt;html&gt;', 'En &lt;body&gt;', 'En &lt;meta&gt;'],
        correct: 2,
        explain: '&lt;body&gt; contiene todo lo que el usuario puede ver: textos, imágenes, botones, etc.'
      },
      {
        q: '¿Para qué sirve &lt;!DOCTYPE html&gt;?',
        opts: ['Define el título de la pestaña', 'Le dice al navegador que es HTML5', 'Carga los estilos CSS', 'Declara variables globales'],
        correct: 1,
        explain: '&lt;!DOCTYPE html&gt; declara la versión de HTML. Sin él, el navegador puede interpretar la página incorrectamente.'
      }
    ]
  },
  {
    id: 3,
    title: 'Encabezados',
    icon: '📰',
    xp: 110,
    doc: 'encabezados',
    lesson: {
      badge: 'Nivel 03',
      title: 'Jerarquía con h1 – h6',
      body: 'Los encabezados crean <strong>jerarquía</strong> en el contenido. Van de &lt;h1&gt; (más importante) a &lt;h6&gt; (menos). Solo debe haber <strong>un &lt;h1&gt;</strong> por página.',
      code:
`&lt;h1&gt;Título principal&lt;/h1&gt;   &lt;!-- Uno por página --&gt;
&lt;h2&gt;Sección&lt;/h2&gt;
&lt;h3&gt;Subsección&lt;/h3&gt;
&lt;h4&gt;Detalle menor&lt;/h4&gt;`,
      tip: '💡 Los encabezados importan para el SEO. Los buscadores los usan para entender la estructura de tu página.'
    },
    questions: [
      {
        q: '¿Cuántos &lt;h1&gt; debería tener una página?',
        opts: ['Ninguno', 'Solo uno', 'Tantos como necesites', 'Máximo tres'],
        correct: 1,
        explain: 'Un solo &lt;h1&gt; por página: el título principal. Mejora accesibilidad y posicionamiento en buscadores.'
      },
      {
        q: '¿Cuál es el encabezado de menor importancia?',
        opts: ['&lt;h1&gt;', '&lt;h3&gt;', '&lt;h5&gt;', '&lt;h6&gt;'],
        correct: 3,
        explain: '&lt;h6&gt; es el encabezado de menor jerarquía en HTML. &lt;h1&gt; es el de mayor importancia.'
      }
    ]
  },
  {
    id: 4,
    title: 'Párrafos y texto',
    icon: '✍️',
    xp: 120,
    doc: 'texto',
    lesson: {
      badge: 'Nivel 04',
      title: 'Texto con significado semántico',
      body: 'La etiqueta &lt;p&gt; define párrafos. Dentro del texto puedes usar etiquetas para dar <strong>significado semántico</strong>: importancia, énfasis, resaltado, código, etc.',
      code:
`&lt;p&gt;&lt;strong&gt;Texto importante&lt;/strong&gt; — negrita semántica&lt;/p&gt;
&lt;p&gt;&lt;em&gt;Texto con énfasis&lt;/em&gt; — cursiva semántica&lt;/p&gt;
&lt;p&gt;&lt;mark&gt;Texto destacado&lt;/mark&gt;&lt;/p&gt;
&lt;p&gt;&lt;code&gt;funcion()&lt;/code&gt; — código inline&lt;/p&gt;
&lt;p&gt;H&lt;sub&gt;2&lt;/sub&gt;O — E = mc&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;`,
      tip: '💡 Usa &lt;strong&gt; en vez de &lt;b&gt; y &lt;em&gt; en vez de &lt;i&gt;. Las versiones semánticas tienen más significado para lectores de pantalla.'
    },
    questions: [
      {
        q: '¿Qué etiqueta da énfasis semántico (cursiva)?',
        opts: ['&lt;i&gt;', '&lt;em&gt;', '&lt;italic&gt;', '&lt;style&gt;'],
        correct: 1,
        explain: '&lt;em&gt; da énfasis semántico. &lt;i&gt; solo es visual, sin significado para tecnologías de asistencia.'
      },
      {
        q: '¿Cuál es la diferencia entre &lt;strong&gt; y &lt;b&gt;?',
        opts: ['No hay diferencia', '&lt;strong&gt; es semántico (importancia), &lt;b&gt; solo visual', '&lt;b&gt; es semántico, &lt;strong&gt; solo visual', '&lt;strong&gt; solo funciona en HTML5'],
        correct: 1,
        explain: '&lt;strong&gt; indica importancia semántica. &lt;b&gt; solo aplica negrita visualmente, sin significado extra.'
      }
    ]
  },
  {
    id: 5,
    title: 'Enlaces',
    icon: '🔗',
    xp: 130,
    doc: 'enlaces',
    lesson: {
      badge: 'Nivel 05',
      title: 'Hipervínculos con &lt;a&gt;',
      body: 'Los enlaces son el corazón de la web. La etiqueta &lt;a&gt; con el atributo <code>href</code> crea hipervínculos a otras páginas, secciones o recursos.',
      code:
`&lt;a href="pagina.html"&gt;Ir a otra página&lt;/a&gt;

&lt;a href="https://google.com" target="_blank" rel="noopener"&gt;
  Google (nueva pestaña)
&lt;/a&gt;

&lt;a href="#seccion"&gt;Ir a sección&lt;/a&gt;

&lt;a href="mailto:hola@ejemplo.com"&gt;Enviar correo&lt;/a&gt;`,
      tip: '💡 Usa rel="noopener noreferrer" al abrir enlaces externos en nueva pestaña. Es una buena práctica de seguridad.'
    },
    questions: [
      {
        q: '¿Qué atributo define la URL de destino de un enlace?',
        opts: ['src', 'link', 'href', 'url'],
        correct: 2,
        explain: 'href (HyperText Reference) define la URL a la que apunta el enlace &lt;a&gt;.'
      },
      {
        q: 'Para abrir un enlace en nueva pestaña, ¿qué valor usa target?',
        opts: ['target="new"', 'target="_blank"', 'target="tab"', 'target="_new"'],
        correct: 1,
        explain: 'target="_blank" abre el enlace en una nueva pestaña. Combínalo con rel="noopener" por seguridad.'
      }
    ]
  },
  {
    id: 6,
    title: 'Imágenes',
    icon: '🖼️',
    xp: 130,
    doc: 'imagenes',
    lesson: {
      badge: 'Nivel 06',
      title: 'Imágenes con &lt;img&gt;',
      body: 'La etiqueta &lt;img&gt; inserta imágenes. Es una etiqueta <strong>vacía</strong> — no tiene cierre. El atributo <code>alt</code> es obligatorio para accesibilidad.',
      code:
`&lt;img src="foto.jpg" alt="Descripción de la imagen"&gt;

&lt;img src="logo.png" alt="Logo" width="200" height="100"&gt;

&lt;figure&gt;
  &lt;img src="grafico.png" alt="Ventas Q1" loading="lazy"&gt;
  &lt;figcaption&gt;Ventas del primer trimestre&lt;/figcaption&gt;
&lt;/figure&gt;`,
      tip: '💡 El atributo alt describe la imagen a usuarios con discapacidad visual y aparece si la imagen no carga.'
    },
    questions: [
      {
        q: '¿Por qué es obligatorio el atributo alt en &lt;img&gt;?',
        opts: ['Para que el navegador cargue la imagen', 'Para accesibilidad — lectores de pantalla lo usan', 'Para definir el tamaño', 'Solo mejora el SEO'],
        correct: 1,
        explain: 'alt describe la imagen a lectores de pantalla (usuarios ciegos). También se muestra si la imagen falla al cargar.'
      },
      {
        q: '¿Cuál de estas opciones es correcta?',
        opts: ['&lt;img src="f.jpg"&gt;&lt;/img&gt;', '&lt;image src="f.jpg" alt="F"&gt;', '&lt;img src="f.jpg" alt="Foto"&gt;', '&lt;img href="f.jpg" alt="Foto"&gt;'],
        correct: 2,
        explain: '&lt;img&gt; es vacío (sin cierre), usa src para la ruta y alt para la descripción. No existe la etiqueta &lt;image&gt;.'
      }
    ]
  },
  {
    id: 7,
    title: 'Listas',
    icon: '📋',
    xp: 130,
    doc: 'listas',
    lesson: {
      badge: 'Nivel 07',
      title: 'ul, ol y dl',
      body: 'HTML tiene tres tipos de listas. <strong>ul</strong> para elementos sin orden. <strong>ol</strong> para pasos o secuencias numeradas. <strong>dl</strong> para términos y sus definiciones.',
      code:
`&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Abrir VS Code&lt;/li&gt;
  &lt;li&gt;Crear index.html&lt;/li&gt;
  &lt;li&gt;Escribir HTML&lt;/li&gt;
&lt;/ol&gt;`,
      tip: '💡 Los &lt;li&gt; solo van dentro de &lt;ul&gt; o &lt;ol&gt;. Las listas pueden anidarse unas dentro de otras.'
    },
    questions: [
      {
        q: '¿Qué lista usarías para los pasos de una receta?',
        opts: ['&lt;ul&gt; — lista no ordenada', '&lt;ol&gt; — lista ordenada', '&lt;dl&gt; — lista de definición', '&lt;list&gt; — lista genérica'],
        correct: 1,
        explain: '&lt;ol&gt; (ordered list) es perfecta para pasos que tienen un orden específico.'
      },
      {
        q: '¿Cuál es la etiqueta para cada elemento de una lista?',
        opts: ['&lt;item&gt;', '&lt;el&gt;', '&lt;li&gt;', '&lt;list-item&gt;'],
        correct: 2,
        explain: '&lt;li&gt; (list item) es la etiqueta para cada elemento dentro de &lt;ul&gt; u &lt;ol&gt;.'
      }
    ]
  },
  {
    id: 8,
    title: 'Tablas',
    icon: '📊',
    xp: 140,
    doc: 'tablas',
    lesson: {
      badge: 'Nivel 08',
      title: 'Datos en tablas',
      body: 'Las tablas muestran datos en filas y columnas. Úsalas solo para <strong>datos tabulares</strong> — nunca para maquetar la página (eso lo hace CSS).',
      code:
`&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nombre&lt;/th&gt;
      &lt;th&gt;Rol&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Ana&lt;/td&gt;
      &lt;td&gt;Developer&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;`,
      tip: '💡 &lt;th&gt; es celda de cabecera (negrita por defecto). &lt;td&gt; es celda de datos normal.'
    },
    questions: [
      {
        q: '¿Qué etiqueta define una fila en una tabla?',
        opts: ['&lt;td&gt;', '&lt;th&gt;', '&lt;tr&gt;', '&lt;row&gt;'],
        correct: 2,
        explain: '&lt;tr&gt; (table row) define cada fila de la tabla. Dentro van &lt;th&gt; o &lt;td&gt;.'
      },
      {
        q: '¿Cuál es la diferencia entre &lt;th&gt; y &lt;td&gt;?',
        opts: ['No hay diferencia', '&lt;th&gt; para cabeceras, &lt;td&gt; para datos', '&lt;td&gt; solo va en thead', '&lt;th&gt; es para tablas horizontales'],
        correct: 1,
        explain: '&lt;th&gt; (table header) se usa para cabeceras. Se renderiza en negrita y mejora la accesibilidad.'
      }
    ]
  },
  {
    id: 9,
    title: 'Formularios',
    icon: '📝',
    xp: 150,
    doc: 'formularios',
    lesson: {
      badge: 'Nivel 09',
      title: 'Recogiendo datos con formularios',
      body: 'Los formularios permiten al usuario enviar datos. Cada campo debe tener un <code>&lt;label&gt;</code> asociado mediante <code>for</code> que coincida con el <code>id</code> del input.',
      code:
`&lt;form action="/enviar" method="POST"&gt;

  &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre" required&gt;

  &lt;label for="email"&gt;Correo&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;

&lt;/form&gt;`,
      tip: '💡 El type del input cambia el teclado en móviles y activa validaciones automáticas del navegador.'
    },
    questions: [
      {
        q: '¿Para qué sirve el atributo for en &lt;label&gt;?',
        opts: ['Define el estilo del label', 'Conecta el label con su input via id', 'Define la URL de envío', 'Hace el campo obligatorio'],
        correct: 1,
        explain: 'El for del label debe coincidir con el id del input. Mejora accesibilidad y hace el label clicable.'
      },
      {
        q: '¿Qué atributo hace que un campo sea obligatorio?',
        opts: ['mandatory', 'required', 'needed', 'must'],
        correct: 1,
        explain: 'required impide enviar el formulario sin rellenar ese campo. El navegador muestra un mensaje automáticamente.'
      }
    ]
  },
  {
    id: 10,
    title: 'Semántica HTML5',
    icon: '🏛️',
    xp: 160,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 10',
      title: 'Etiquetas con significado',
      body: 'HTML5 introdujo etiquetas <strong>semánticas</strong> que describen el propósito del contenido. Mejoran accesibilidad, SEO y legibilidad del código.',
      code:
`&lt;header&gt;Cabecera del sitio&lt;/header&gt;

&lt;nav&gt;Menú de navegación&lt;/nav&gt;

&lt;main&gt;
  &lt;article&gt;Contenido independiente&lt;/article&gt;
  &lt;aside&gt;Contenido relacionado&lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;Pie de página&lt;/footer&gt;`,
      tip: '💡 Evita usar &lt;div&gt; para todo. Si existe una etiqueta semántica que describe mejor el contenido, úsala.'
    },
    questions: [
      {
        q: '¿Cuál es el propósito de las etiquetas semánticas?',
        opts: ['Añaden estilos automáticamente', 'Describen el propósito del contenido al navegador y lectores de pantalla', 'Solo son &lt;div&gt; con nombre', 'Son obligatorias para cargar la página'],
        correct: 1,
        explain: 'Las etiquetas semánticas comunican significado a navegadores, buscadores y tecnologías de asistencia.'
      },
      {
        q: '¿Qué etiqueta usarías para la navegación principal?',
        opts: ['&lt;menu&gt;', '&lt;ul&gt;', '&lt;nav&gt;', '&lt;links&gt;'],
        correct: 2,
        explain: '&lt;nav&gt; está diseñada específicamente para bloques de navegación principal del sitio.'
      }
    ]
  },
  {
    id: 11,
    title: 'Atributos globales',
    icon: '🏷️',
    xp: 160,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 11',
      title: 'Atributos que todo elemento acepta',
      body: 'Los <strong>atributos globales</strong> se pueden usar en cualquier elemento HTML. Los más importantes son <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code> y los atributos <code>data-*</code>.',
      code:
`&lt;!-- id: identificador único en la página --&gt;
&lt;div id="cabecera"&gt;...&lt;/div&gt;

&lt;!-- class: agrupa elementos para CSS/JS --&gt;
&lt;p class="destacado grande"&gt;...&lt;/p&gt;

&lt;!-- title: tooltip al pasar el ratón --&gt;
&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;

&lt;!-- data-*: datos personalizados --&gt;
&lt;button data-usuario-id="42"&gt;Ver perfil&lt;/button&gt;`,
      tip: '💡 Los id deben ser únicos. Las class pueden repetirse. Usa data-* para guardar datos sin recurrir a JavaScript.'
    },
    questions: [
      {
        q: '¿Cuántos elementos pueden tener el mismo id en una página?',
        opts: ['Sin límite', 'Máximo tres', 'Solo uno', 'Depende del navegador'],
        correct: 2,
        explain: 'El id debe ser único en toda la página. Si necesitas agrupar elementos usa class, que sí puede repetirse.'
      },
      {
        q: '¿Para qué sirven los atributos data-*?',
        opts: ['Definen estilos CSS', 'Guardan datos personalizados en el HTML', 'Conectan a una base de datos', 'Solo funcionan en formularios'],
        correct: 1,
        explain: 'Los atributos data-* permiten almacenar información extra directamente en el elemento, accesible desde JavaScript con dataset.'
      }
    ]
  },
  {
    id: 12,
    title: 'Div y Span',
    icon: '📦',
    xp: 160,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 12',
      title: 'Contenedores genéricos',
      body: '<strong>&lt;div&gt;</strong> es un contenedor <strong>de bloque</strong> — ocupa toda la línea. <strong>&lt;span&gt;</strong> es de <strong>línea</strong> — solo ocupa su contenido. Ambos no tienen significado semántico; úsalos solo cuando no haya una etiqueta semántica adecuada.',
      code:
`&lt;!-- div: contenedor de bloque --&gt;
&lt;div class="tarjeta"&gt;
  &lt;h2&gt;Título&lt;/h2&gt;
  &lt;p&gt;Descripción del producto.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- span: contenedor en línea --&gt;
&lt;p&gt;
  El precio es
  &lt;span class="precio"&gt;29,99 €&lt;/span&gt;
  con IVA.
&lt;/p&gt;`,
      tip: '💡 Pregúntate siempre: ¿hay una etiqueta semántica mejor? &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;... antes de usar &lt;div&gt;.'
    },
    questions: [
      {
        q: '¿Cuál es la diferencia principal entre &lt;div&gt; y &lt;span&gt;?',
        opts: ['&lt;div&gt; es semántico y &lt;span&gt; no', '&lt;div&gt; es de bloque y &lt;span&gt; es de línea', '&lt;span&gt; solo va en formularios', 'No hay diferencia real'],
        correct: 1,
        explain: '&lt;div&gt; es un contenedor de bloque (nueva línea). &lt;span&gt; es de línea, ideal para fragmentos de texto dentro de un párrafo.'
      },
      {
        q: '¿Cuándo debería usarse &lt;div&gt;?',
        opts: ['Siempre, es el mejor contenedor', 'Para texto en negrita', 'Cuando no existe una etiqueta semántica adecuada', 'Solo dentro de formularios'],
        correct: 2,
        explain: '&lt;div&gt; no tiene valor semántico. Úsalo como último recurso cuando etiquetas como &lt;article&gt; o &lt;section&gt; no encajen.'
      }
    ]
  },
  {
    id: 13,
    title: 'Audio y Video',
    icon: '🎬',
    xp: 170,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 13',
      title: 'Multimedia nativa en HTML5',
      body: 'HTML5 añadió &lt;video&gt; y &lt;audio&gt; para incrustar contenido multimedia sin plugins. El atributo <code>controls</code> muestra los controles del navegador. Con <code>&lt;source&gt;</code> puedes ofrecer múltiples formatos.',
      code:
`&lt;video controls width="640" poster="portada.jpg"&gt;
  &lt;source src="video.mp4"  type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Tu navegador no soporta video HTML5.
&lt;/video&gt;

&lt;audio controls&gt;
  &lt;source src="cancion.mp3" type="audio/mpeg"&gt;
  Tu navegador no soporta audio HTML5.
&lt;/audio&gt;`,
      tip: '💡 El texto entre las etiquetas de video/audio se muestra solo si el navegador no soporta el elemento — es el fallback.'
    },
    questions: [
      {
        q: '¿Qué atributo muestra los controles de reproducción?',
        opts: ['play', 'controls', 'src', 'media'],
        correct: 1,
        explain: 'El atributo controls hace que el navegador muestre sus controles nativos: play/pausa, volumen, barra de progreso, etc.'
      },
      {
        q: '¿Para qué sirven varios &lt;source&gt; dentro de &lt;video&gt;?',
        opts: ['Cargar el video más rápido', 'Ofrecer distintas calidades', 'Proveer formatos alternativos por compatibilidad', 'Añadir subtítulos'],
        correct: 2,
        explain: 'Distintos navegadores soportan distintos formatos. Con varios &lt;source&gt; el navegador elige el primero que entienda.'
      }
    ]
  },
  {
    id: 14,
    title: 'Iframes',
    icon: '🪟',
    xp: 170,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 14',
      title: 'Incrustando páginas externas',
      body: 'El elemento <strong>&lt;iframe&gt;</strong> incrusta otra página web dentro de la actual. Se usa para mapas, videos de YouTube, widgets externos, etc. El atributo <code>sandbox</code> restringe lo que puede hacer el contenido incrustado.',
      code:
`&lt;!-- Video de YouTube --&gt;
&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ID"
  title="Descripción del video"
  allowfullscreen&gt;
&lt;/iframe&gt;

&lt;!-- Iframe con sandbox (más seguro) --&gt;
&lt;iframe
  src="widget.html"
  sandbox="allow-scripts"&gt;
&lt;/iframe&gt;`,
      tip: '💡 Siempre añade el atributo title a un iframe — los lectores de pantalla lo necesitan para describir el contenido.'
    },
    questions: [
      {
        q: '¿Qué hace el atributo sandbox en un iframe?',
        opts: ['Oculta el iframe', 'Restringe las capacidades del contenido incrustado', 'Pone un borde al iframe', 'Permite pantalla completa'],
        correct: 1,
        explain: 'sandbox aplica restricciones de seguridad al iframe: bloquea scripts, formularios, popups, etc. a menos que se permitan explícitamente.'
      },
      {
        q: '¿Por qué es importante el atributo title en &lt;iframe&gt;?',
        opts: ['Mejora el SEO automáticamente', 'Acelera la carga', 'Los lectores de pantalla lo usan para describir el iframe', 'Define el idioma del contenido'],
        correct: 2,
        explain: 'Sin title, los usuarios de lectores de pantalla no saben qué contiene el iframe. Es esencial para la accesibilidad.'
      }
    ]
  },
  {
    id: 15,
    title: 'Meta y SEO',
    icon: '🔍',
    xp: 170,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 15',
      title: 'Optimizando para buscadores',
      body: 'Las etiquetas <strong>&lt;meta&gt;</strong> en el &lt;head&gt; le dan información a buscadores y redes sociales. La meta <code>description</code> aparece en los resultados de Google. Las etiquetas <strong>Open Graph</strong> controlan cómo se ve tu página al compartirla.',
      code:
`&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport"
        content="width=device-width, initial-scale=1"&gt;
  &lt;meta name="description"
        content="Aprende HTML desde cero de forma interactiva."&gt;

  &lt;!-- Open Graph (redes sociales) --&gt;
  &lt;meta property="og:title"       content="HTML Quest"&gt;
  &lt;meta property="og:description" content="Aprende HTML jugando."&gt;
  &lt;meta property="og:image"       content="preview.png"&gt;

  &lt;title&gt;HTML Quest&lt;/title&gt;
&lt;/head&gt;`,
      tip: '💡 La meta description no afecta directamente el ranking, pero sí el CTR: es el texto que los usuarios leen antes de hacer clic en Google.'
    },
    questions: [
      {
        q: '¿Dónde deben ir las etiquetas &lt;meta&gt;?',
        opts: ['En &lt;body&gt;', 'En &lt;footer&gt;', 'En &lt;head&gt;', 'Al final del documento'],
        correct: 2,
        explain: 'Las etiquetas &lt;meta&gt; van siempre dentro del &lt;head&gt;, que contiene metadatos no visibles del documento.'
      },
      {
        q: '¿Para qué sirven las etiquetas Open Graph (og:)?',
        opts: ['Para mejorar el rendimiento', 'Para controlar cómo se ve la página al compartirla en redes sociales', 'Son requeridas por Google', 'Solo sirven para imágenes'],
        correct: 1,
        explain: 'Las metas og: definen el título, descripción e imagen que aparecen al compartir una URL en Facebook, Twitter, WhatsApp, etc.'
      }
    ]
  },
  {
    id: 16,
    title: 'Accesibilidad',
    icon: '♿',
    xp: 180,
    doc: 'estructura',
    lesson: {
      badge: 'Nivel 16',
      title: 'HTML accesible con ARIA',
      body: 'La accesibilidad garantiza que tu web funcione para <strong>todos</strong>, incluidas personas con discapacidades. ARIA (<em>Accessible Rich Internet Applications</em>) son atributos que añaden información para tecnologías de asistencia cuando el HTML no es suficiente.',
      code:
`&lt;!-- role: describe el papel del elemento --&gt;
&lt;div role="alert"&gt;Error: campo obligatorio.&lt;/div&gt;

&lt;!-- aria-label: nombre accesible --&gt;
&lt;button aria-label="Cerrar ventana"&gt;✕&lt;/button&gt;

&lt;!-- aria-hidden: oculta del lector de pantalla --&gt;
&lt;span aria-hidden="true"&gt;★&lt;/span&gt;

&lt;!-- aria-expanded: estado de un acordeón/menú --&gt;
&lt;button aria-expanded="false"&gt;Ver más&lt;/button&gt;`,
      tip: '💡 La primera regla de ARIA: si puedes usar HTML semántico nativo (&lt;button&gt;, &lt;nav&gt;...), úsalo. ARIA es el complemento, no el sustituto.'
    },
    questions: [
      {
        q: '¿Qué hace aria-label?',
        opts: ['Añade una etiqueta visible', 'Proporciona un nombre accesible para lectores de pantalla', 'Define el idioma del elemento', 'Es igual que el atributo title'],
        correct: 1,
        explain: 'aria-label ofrece un nombre descriptivo a tecnologías de asistencia cuando el texto visible no es suficiente, como un botón con solo un ícono.'
      },
      {
        q: '¿Cuál es la primera regla de ARIA?',
        opts: ['Añadir ARIA a todos los elementos', 'Usar siempre role="main"', 'Usar HTML semántico nativo antes que ARIA', 'ARIA es obligatorio en HTML5'],
        correct: 2,
        explain: 'Si existe un elemento HTML nativo con el significado correcto (&lt;button&gt;, &lt;nav&gt;, &lt;header&gt;...), úsalo en vez de añadir ARIA a un &lt;div&gt;.'
      }
    ]
  },
  {
    id: 17,
    title: 'Tipos de input',
    icon: '🎛️',
    xp: 180,
    doc: 'formularios',
    lesson: {
      badge: 'Nivel 17',
      title: 'Inputs avanzados en formularios',
      body: 'Más allá de <code>type="text"</code>, HTML ofrece muchos tipos de input especializados. Cada uno activa validaciones nativas del navegador y teclados optimizados en móviles. También existen <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code> y los controles de selección múltiple.',
      code:
`&lt;input type="checkbox" id="acepto" name="acepto"&gt;
&lt;label for="acepto"&gt;Acepto los términos&lt;/label&gt;

&lt;input type="radio" id="op1" name="opcion" value="a"&gt;
&lt;label for="op1"&gt;Opción A&lt;/label&gt;

&lt;select name="pais"&gt;
  &lt;option value="es"&gt;España&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
&lt;/select&gt;

&lt;textarea name="comentario" rows="4"&gt;&lt;/textarea&gt;

&lt;input type="range" min="0" max="100" value="50"&gt;
&lt;input type="date" name="fecha"&gt;`,
      tip: '💡 Los radio buttons con el mismo atributo name forman un grupo: solo uno puede estar seleccionado a la vez.'
    },
    questions: [
      {
        q: '¿Cómo se agrupan los radio buttons para que solo uno sea seleccionable a la vez?',
        opts: ['Con el mismo id', 'Con el mismo name', 'Dentro del mismo &lt;div&gt;', 'Con el atributo group'],
        correct: 1,
        explain: 'Los &lt;input type="radio"&gt; con el mismo atributo name forman un grupo. El navegador garantiza que solo uno esté marcado.'
      },
      {
        q: '¿Qué elemento permite al usuario escribir texto de varias líneas?',
        opts: ['&lt;input type="multiline"&gt;', '&lt;input type="text" rows="4"&gt;', '&lt;textarea&gt;', '&lt;select multiple&gt;'],
        correct: 2,
        explain: '&lt;textarea&gt; es el elemento para texto de varias líneas. Su tamaño se controla con los atributos rows y cols.'
      }
    ]
  },
  {
    id: 18,
    title: 'Entidades HTML',
    icon: '🔤',
    xp: 190,
    doc: 'texto',
    lesson: {
      badge: 'Nivel 18',
      title: 'Caracteres especiales y entidades',
      body: 'Las <strong>entidades HTML</strong> son códigos para representar caracteres que el navegador podría confundir con código, o que no están en el teclado. Empiezan con <code>&amp;</code> y terminan con <code>;</code>. Pueden ser nombradas (<code>&amp;amp;</code>) o numéricas (<code>&amp;#38;</code>).',
      code:
`&lt;!-- Caracteres reservados --&gt;
&amp;lt;   → &lt;   (menor que)
&amp;gt;   → &gt;   (mayor que)
&amp;amp;  → &amp;   (ampersand)
&amp;quot; → "   (comilla doble)

&lt;!-- Espacios y tipografía --&gt;
&amp;nbsp;  → espacio irrompible
&amp;copy;  → ©
&amp;reg;   → ®
&amp;mdash; → —   (raya)
&amp;euro;  → €`,
      tip: '💡 &amp;nbsp; evita que el navegador rompa una línea entre dos palabras. Útil para "10 km" o "Artículo 5".'
    },
    questions: [
      {
        q: '¿Cómo se escribe el símbolo < en HTML sin que el navegador lo interprete como etiqueta?',
        opts: ['\\<', '&amp;lt;', '&amp;smaller;', '(lt)'],
        correct: 1,
        explain: '&amp;lt; es la entidad HTML para el carácter "menor que" (&lt;). Sin ella, el navegador lo trataría como apertura de etiqueta.'
      },
      {
        q: '¿Qué hace &amp;nbsp; en HTML?',
        opts: ['Añade una línea en blanco', 'Inserta un espacio irrompible entre palabras', 'Crea un párrafo nuevo', 'Es un comentario invisible'],
        correct: 1,
        explain: '&amp;nbsp; (non-breaking space) inserta un espacio que el navegador no romperá al final de línea. Ideal para unidades o nombres compuestos.'
      }
    ]
  }
];

/* ── STATE ─────────────────────────────────────────── */

let activeLevelId     = null;
let activeQuestionIdx = 0;
let correctCount      = 0;
let awaitingNext      = false;

let questionTimer = null;
const QUESTION_TIME = 15;

function startTimer() {
  clearTimer();
  let timeLeft = QUESTION_TIME;
  updateTimer(timeLeft);
  questionTimer = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft);
    if (timeLeft <= 0) {
      clearTimer();
      pickAnswer(-1);
    }
  }, 1000);
}

function clearTimer() {
  if (questionTimer) { clearInterval(questionTimer); questionTimer = null; }
}

function updateTimer(t) {
  const countEl = document.getElementById('qTimerCount');
  const fillEl  = document.getElementById('qTimerFill');
  const timerEl = document.getElementById('qTimer');
  if (countEl) countEl.textContent = t;
  if (fillEl)  { fillEl.style.width = (t / QUESTION_TIME * 100) + '%'; fillEl.classList.toggle('urgent', t <= 5); }
  if (timerEl) timerEl.classList.toggle('urgent', t <= 5);
}

let progress = JSON.parse(localStorage.getItem('htmlquest') || '{}');
// { "1": { stars: 3, xp: 100 }, ... }

function saveProgress() {
  localStorage.setItem('htmlquest', JSON.stringify(progress));
}

function totalXP() {
  return Object.values(progress).reduce((s, p) => s + (p.xp || 0), 0);
}

function completedCount() {
  return Object.keys(progress).length;
}

/* ── SCREENS ─────────────────────────────────────────── */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function showSelect() {
  renderGrid();
  document.getElementById('totalXP').textContent = totalXP();
  const pct = (completedCount() / LEVELS.length) * 100;
  document.getElementById('overallFill').style.width = pct + '%';
  document.getElementById('overallText').textContent = completedCount() + ' / ' + LEVELS.length + ' niveles';
  showScreen('select');
}

/* ── LEVEL GRID ─────────────────────────────────────────── */

function renderGrid() {
  const grid = document.getElementById('levelGrid');
  grid.innerHTML = '';
  LEVELS.forEach((lvl) => {
    const p = progress[lvl.id];

    const card = document.createElement('div');
    card.className = 'level-card' + (p ? ' completed' : '');

    let starsHTML = '';
    if (p) {
      for (let i = 0; i < 3; i++) {
        starsHTML += `<span class="${i < p.stars ? 'star-on' : 'star-off'}">★</span>`;
      }
    } else {
      starsHTML = '<span class="star-empty-all">★ ★ ★</span>';
    }

    card.innerHTML = `
      <div class="lc-num">${String(lvl.id).padStart(2, '0')}</div>
      <div class="lc-icon">${lvl.icon}</div>
      <div class="lc-title">${lvl.title}</div>
      <div class="lc-stars">${starsHTML}</div>
      <div class="lc-xp">${lvl.xp} XP</div>
    `;

    card.onclick = () => showLesson(lvl.id);
    grid.appendChild(card);
  });
}

/* ── LESSON ─────────────────────────────────────────── */

function showLesson(levelId) {
  activeLevelId = levelId;
  const lvl = LEVELS.find(l => l.id === levelId);
  const les = lvl.lesson;

  document.getElementById('lessonBadge').textContent  = les.badge;
  document.getElementById('lessonTitle').textContent  = les.title;
  document.getElementById('lessonBody').innerHTML     = les.body;
  document.getElementById('lessonCode').innerHTML     = les.code;
  document.getElementById('lessonTip').innerHTML      = les.tip;
  document.getElementById('lessonDocsLink').href      = 'referencia.html?s=' + lvl.doc;

  showScreen('lesson');
}

function backToLesson() {
  clearTimer();
  showLesson(activeLevelId);
  showScreen('lesson');
}

/* ── QUESTIONS ─────────────────────────────────────────── */

function startQuestions() {
  activeQuestionIdx = 0;
  correctCount = 0;
  renderQuestion();
  showScreen('question');
}

function renderQuestion() {
  awaitingNext = false;
  const lvl = LEVELS.find(l => l.id === activeLevelId);
  const q   = lvl.questions[activeQuestionIdx];
  const tot = lvl.questions.length;

  // dots
  let dots = '';
  for (let i = 0; i < tot; i++) {
    const cls = i === activeQuestionIdx ? 'active' : i < activeQuestionIdx ? 'done' : '';
    dots += `<div class="q-dot ${cls}"></div>`;
  }
  document.getElementById('qDots').innerHTML = dots;

  document.getElementById('qLabel').textContent = `Pregunta ${activeQuestionIdx + 1} de ${tot}`;
  document.getElementById('qText').innerHTML    = q.q;

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = opt;
    btn.onclick = () => pickAnswer(idx);
    grid.appendChild(btn);
  });

  const fb = document.getElementById('qFeedback');
  fb.className = 'q-feedback';
  fb.style.display = 'none';

  startTimer();
}

function pickAnswer(selected) {
  if (awaitingNext) return;
  awaitingNext = true;
  clearTimer();

  const lvl = LEVELS.find(l => l.id === activeLevelId);
  const q   = lvl.questions[activeQuestionIdx];
  const ok  = selected === q.correct;
  if (ok) correctCount++;

  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    if (idx === selected && !ok) btn.classList.add('wrong');
  });

  const isLast = activeQuestionIdx + 1 >= lvl.questions.length;
  const fb = document.getElementById('qFeedback');
  fb.className = 'q-feedback show ' + (ok ? 'correct' : 'wrong');
  fb.style.display = 'flex';
  fb.innerHTML = `
    <span class="feedback-icon">${ok ? '✓' : '✗'}</span>
    <div class="feedback-body">
      ${q.explain}
      <br>
      <button class="feedback-next" onclick="advanceQuestion()">
        ${isLast ? 'Ver resultado →' : 'Siguiente pregunta →'}
      </button>
    </div>
  `;
}

function advanceQuestion() {
  activeQuestionIdx++;
  const lvl = LEVELS.find(l => l.id === activeLevelId);
  if (activeQuestionIdx < lvl.questions.length) {
    renderQuestion();
  } else {
    showLevelComplete();
  }
}

/* ── LEVEL COMPLETE ─────────────────────────────────────────── */

function showLevelComplete() {
  const lvl  = LEVELS.find(l => l.id === activeLevelId);
  const tot  = lvl.questions.length;
  const stars = correctCount === tot ? 3 : correctCount > 0 ? 2 : 1;
  const earnedXP = correctCount === tot ? lvl.xp : correctCount > 0 ? Math.floor(lvl.xp / 2) : 0;

  // Save best result; always mark as done even with 0 correct
  const prev = progress[lvl.id];
  if (!prev || prev.stars < stars) {
    progress[lvl.id] = { stars, xp: earnedXP };
    saveProgress();
  }

  const icons = ['😅', '👍', '🎉'];
  const msgs  = [
    'Repasa la lección e inténtalo de nuevo.',
    `${correctCount} de ${tot} correctas. ¡Sigue practicando!`,
    '¡Perfecto! Todas las respuestas correctas.'
  ];

  document.getElementById('lcIcon').textContent  = icons[stars - 1];
  document.getElementById('lcTitle').textContent = stars === 3 ? '¡Nivel completado!' : 'Nivel superado';
  document.getElementById('lcStars').innerHTML   = starsHTML(stars);
  document.getElementById('lcXP').textContent    = earnedXP > 0 ? `+${earnedXP} XP` : '0 XP';
  document.getElementById('lcMsg').textContent   = msgs[stars - 1];
  document.getElementById('totalXP').textContent = totalXP();

  const nextIdx = LEVELS.findIndex(l => l.id === activeLevelId) + 1;
  const nextBtn = document.getElementById('nextLevelBtn');
  if (nextIdx < LEVELS.length) {
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent   = `Nivel ${LEVELS[nextIdx].id} →`;
  } else {
    nextBtn.style.display = 'none';
  }

  showScreen('levelcomplete');
  if (stars === 3) launchConfetti();
}

function starsHTML(count) {
  let h = '';
  for (let i = 0; i < 3; i++) h += `<span class="${i < count ? 'star-on' : 'star-off'}">★</span>`;
  return h;
}

function goNextLevel() {
  const nextIdx = LEVELS.findIndex(l => l.id === activeLevelId) + 1;
  if (nextIdx < LEVELS.length) {
    showLesson(LEVELS[nextIdx].id);
  } else {
    document.getElementById('finalXP').textContent = totalXP() + ' XP';
    showScreen('gamecomplete');
    launchConfetti();
  }
}

/* ── CONFETTI ─────────────────────────────────────────── */

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 9 + 4,
    speedX: (Math.random() - 0.5) * 5,
    speedY: Math.random() * 4 + 2,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 8,
    color: `hsl(${Math.random() * 360},90%,55%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p, i) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      if (p.y > canvas.height + 20) pieces.splice(i, 1);
    });
    if (pieces.length > 0) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ── RESET ─────────────────────────────────────────── */

function resetProgress() {
  document.getElementById('resetModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('resetModal').style.display = 'none';
}

function confirmReset() {
  progress = {};
  saveProgress();
  closeModal();
  showSelect();
}

// Close modal on backdrop click
document.getElementById('resetModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* ── INIT ─────────────────────────────────────────── */
showSelect();
