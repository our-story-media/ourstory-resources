---
title: Kit Indaba
next: /quickstart/app/
lang: es-x-mtfrom-en
---
<ReadTime/> 

# Kit Indaba
 

<Leader> 

Indaba está disponible como un &#39;kit&#39; portátil e independiente, una instancia autónoma de Indaba que le permite soportar todo el flujo de trabajo de Indaba en el campo sin conectividad a Internet.
 

</Leader> 

## Instalación inicial
 

<ol><li>Descargue el siguiente archivo en una memoria USB y use <a href="https://etcher.balena.io/">Balena Etcher</a> para colocarlo en la tarjeta SD (mínimo 32 GB):</li></ol>
 

<blockquote>Consejo: <span class="code">Haga clic derecho</span> y luego <span class="code">Guardar enlace como</span> para descargar los siguientes archivos:</blockquote>
 

<TitanVersion version="indaba-rpi.version" file="indaba-rpi.zip"/> 

<!-- - [images.tar](http://download.indaba.dev/images.tar) --> 

<ol start="2"><li>Asegúrese de que el kit de tablero tenga suficiente carga de batería o esté enchufado a la red eléctrica.</li></ol>
 

<ol start="3"><li>Inserte la SD recién creada en la Compute Unit del Dashboard Kit.</li></ol>
 

<blockquote>Consejo: La primera vez que lo enciendes con una tarjeta SD recién creada, la instalación puede tardar hasta 15 minutos.</blockquote>
 

<strong>NO APAGUE HASTA QUE SE COMPLETE LA INSTALACIÓN</strong>
 

<ol start="4"><li>Para comprobar el progreso de la instalación, únete a la red WiFi <span class="code">de INDABA</span> con cualquier dispositivo y visita <a href="http://indaba.local">http://indaba.local</a> o <a href="http://10.10.10.1">http://10.10.10.1</a> .</li></ol>
 

<ol start="5"><li>Una vez que vea el Panel de Indaba en su navegador, estará listo para continuar.</li></ol>
 

## Actualizaciones de software
 

Puede actualizar el software del Panel cuando haya actualizaciones disponibles.
 

<ol><li>Descargue el siguiente archivo:</li></ol>
 

<blockquote>Consejo: <span class="code">Haga clic derecho</span> y luego <span class="code">Guardar enlace como</span> para descargar los siguientes archivos:</blockquote>
 

<TitanVersion version="indaba-update.version" file="indaba-update.tar"/> 

<ol start="2"><li>Copie este archivo en la carpeta raíz de una memoria USB asegurándose de que se llame <span class="code">indaba-update.tar</span> (no es necesario utilizar <span class="code">Balena Etcher</span> como ocurre con la instalación por primera vez).</li></ol>
 

# Despliegue
 

## Encendido
 

Presione el botón de encendido una vez y suéltelo.
 

## Apagar
 

Mantenga presionado el botón de encendido durante 3 segundos y suéltelo. Espere hasta que se apague la luz del transmisor WiFi antes de cerrar la carcasa.
 

<!-- ## Initial Device Connection 

Si la aplicación se está ejecutando en la computadora y todos los dispositivos están conectados a WiFi, puede abrir la aplicación en cada dispositivo Android.
 

En la primera ejecución, la aplicación buscará una aplicación local que se esté ejecutando en una computadora; esto puede tardar hasta 30 segundos.
 

Este paso inicial debe realizarse con los participantes dentro del alcance de la WiFi:
 

<ol><li>Haz que cada grupo seleccione la sesión en la que quieres que participen.</li></ol>
 
<ol start="2"><li>Permítales iniciar sesión, seleccionar una cámara y abrir la pantalla de la cámara.</li></ol>
 

{% sugerencia estilo=&quot;info&quot; %}
 
Tan pronto como un dispositivo se une a la pantalla de la cámara y descarga los recursos necesarios, los participantes pueden contribuir con contenido sin conexión a WiFi.
 
{% final %}
 

## Capturar contenido
 

Este proceso se puede realizar sin conexión, es decir, no es necesario que la computadora y la conexión WiFi estén disponibles.
 

## Subiendo contenido
 

<em><strong>Requiere conexión WiFi a la computadora</strong></em>
 

La carga debe iniciarse cuando cada dispositivo esté conectado a WiFi y la aplicación se esté ejecutando en la computadora. En algunos casos, cargar un solo dispositivo a la vez puede ser más rápido que intentar sincronizar todos simultáneamente.
 

Dependiendo de los participantes, este proceso de carga podría integrarse en &quot;paradas en boxes&quot; durante el proceso de filmación.
 

## Revisar contenido
 

<em><strong>Requiere conexión WiFi a la computadora</strong></em>
 

Una vez que el contenido se carga desde un dispositivo, está disponible para que todos los participantes lo vean y lo utilicen para crear historias.
 

## Editar contenido
 

<em><strong>Requiere conexión WiFi a la computadora</strong></em>
 

Se pueden editar varias historias simultáneamente; sin embargo, el procesamiento de cada una se realiza en una cola.
 

&quot; <strong>Publicar</strong> &quot; una historia implica que la aplicación cree un único archivo de vídeo a partir de la historia de los participantes.
 

Solo se procesa (publica) una historia a la vez, por lo que puede haber un retraso para los participantes que esperan que se complete el procesamiento de su historia.
 

{% sugerencia estilo=&quot;info&quot; %}
 
Indaba consume mucha batería, especialmente cuando publica historias. Vigile la batería de su computadora portátil y controle el consumo de energía cuando sea necesario.
 

Las historias seguirán procesándose sin que el dispositivo Android esté disponible.
 
{% final %}
 

## Presentación de contenido
 

El contenido publicado en baja resolución se puede reproducir directamente desde los dispositivos Android que crearon el contenido; sin embargo, puede abrir el directorio de carga ubicado en la computadora y reproducir versiones de alta calidad directamente. --&gt;
 

# Mantenimiento
 

## Los datos de copia de seguridad
 

Las tarjetas SD a veces se dañan, por lo que es una buena práctica mantener actualizaciones periódicas de los datos de Indaba en su kit Indaba.
 

Para realizar una copia de seguridad:
 

<ol><li>Inserte una memoria USB en el <span class="code">kit Indaba</span> .</li></ol>
 
<ol start="2"><li>Actualice el <span class="code">Panel del administrador</span> y seleccione <span class="code">Copia de seguridad en esta unidad</span> .</li></ol>
 
<ol start="3"><li>Espere hasta que se haya completado la espalda.</li></ol>
 

Se creará una nueva copia de seguridad en la unidad USB cada vez que se presione el botón. Esta copia de seguridad estará en la carpeta <span class="code">/indaba/...timestamp...</span> de la unidad.
 

Asegúrese de retirar esta unidad USB y guardarla aparte del kit Indaba para evitar la pérdida de datos.
 

## Restaurar datos
 

Si necesita restaurar una copia de seguridad anterior por algún motivo, siga estos pasos:
 

<ol><li>Ubique la unidad USB con una copia de seguridad realizada previamente.</li></ol>
 
<ol start="2"><li>Asegúrese de tener un kit Indaba que funcione (es decir, puede acceder al Panel a través de un navegador conectado a la red WiFi <span class="code">de INDABA</span> ). Si su kit Indaba no puede iniciarse, deberá seguir los pasos de <span class="code">Instalación inicial</span> y restaurar su kit a su estado predeterminado.</li></ol>
 
<ol start="3"><li>Conecte la unidad USB con sus copias de seguridad y visite el Panel en un navegador.</li></ol>
 
<ol start="4"><li>Seleccione el respaldo que desea restaurar de la lista en el Panel de control. Haga clic en el botón <span class="code">Restaurar</span> al lado de la copia de seguridad.</li></ol>
 

<blockquote>Nota: Dado que el kit Indaba no está conectado a Internet, las fechas y horas enumeradas pueden no tener sentido, pero estarán en el orden en que se realizaron las copias de seguridad.</blockquote>
 

<blockquote>Nota: Todos los datos se borrarán al realizar una restauración. Tenga cuidado con la copia de seguridad que selecciona.</blockquote>
 

## Copia de seguridad de emergencia
 

Utilice esto como último recurso, cuando no pueda iniciar Indaba en un estado en el que pueda ejecutar Backup desde el panel. Le permitirá, como mínimo, rescatar los archivos de vídeo; sin embargo, dependiendo de la causa del fallo, es posible que no le permita restaurar todo el kit a un estado anterior.
 

<ol><li>Cree un archivo vacío llamado <span class="code">EMERGENCYBACKUP</span> en una unidad USB usando una computadora normal.</li></ol>
 
<ol start="2"><li>Inserte la unidad USB en el <span class="code">kit Indaba</span> .</li></ol>
 
<ol start="3"><li>Espere un mínimo de 10 minutos y luego retire la unidad USB.</li></ol>
 
<ol start="4"><li>Inserte la unidad USB en otra computadora y verifique los archivos de respaldo.</li></ol>
 

## Estructura de respaldo
 

<em>Para un comportamiento normal, no es necesario comprender la estructura de la carpeta de respaldo.</em>
 

<pre><code class="language-bash"></code></pre>
 
UNIDAD USB/
 
├─ indaba/
 
│ ├─ indaba-logs/# Ubicación de los registros que se generan cada vez que se inserta la memoria USB en el dispositivo.
 
│ │ ├─ logs-%timestamp%/# Contenido de una única copia de seguridad de registros (múltiples archivos .log)
 
│ ├─ indaba-em-copia de seguridad/
 
│ │ ├─ backup-%timestamp%/# Contenido de un único proceso de copia de seguridad de emergencia.
 
│ │
 
│ ├─ %marca de tiempo%/
 
│ │ ├─ subir/# Contenidos del directorio de medios de Indaba
 
│ │ ├─ *.json # Cada archivo JSON es una copia de seguridad para una colección de base de datos
 
│ │ ├─ indaba.redis # Copia de seguridad del servicio de sesión de Redis
 
│
 
│ indaba-update.tar # Archivo descargado de Internet que contiene la actualización de Indaba
 
│ indaba-update.tar.done # Se cambia el nombre del archivo de actualización cuando la actualización se realiza correctamente
 
│
 
│ EMERGENYBACKUP # Archivo utilizado para activar el proceso de copia de seguridad de emergencia
 
│ EMERGENYBACKUP.done # Archivo colocado en la unidad para indicar que se ha completado una copia de seguridad de emergencia
 
<pre><span class="code"></span></pre>
 

