---
title: Solución de problemas
lang: es-x-mtfrom-en
---
<h1> Solución de problemas </h1> 

<h2> Tablero de Titán </h2> 

<h3> La instalación se bloquea/no hace nada </h3> 

 Al utilizar la versión <span class="code">Toolbox</span> de Indaba Titan (que está respaldada por Docker Toolbox), a veces hay problemas en los que Docker no se inicia. A menudo, el método más fácil para que vuelva a funcionar es:  

<ul><li> Reiniciar la máquina </li></ul> 
<ul><li> Cambiar la red mientras la ventana acoplable está &quot;bloqueada&quot; a menudo provoca que continúe. </li></ul> 
<ul><li> Intentar iniciar Indaba Titan por primera vez mientras se conecta a Internet (en teoría no necesita descargar nada, pero esto a veces lo hace funcionar). </li></ul> 

<h3> La red no se volverá a conectar después de cerrar el panel </h3> 

 Ejecute la herramienta <span class="code">Fix Network</span> instalada junto con Indaba Dashboard.  

<h2> Publicación de historias </h2> 

<h3> Los videos no tienen la longitud correcta </h3> 

 A veces, el dispositivo que grabó el video original no informa la duración correcta, y esto causa problemas con el paso de publicación de la historia. Esto se puede rectificar fácilmente siguiendo estos pasos:  

<ul><li> Clonar la historia que tiene los problemas </li></ul> 
<ul><li> Abre la historia en el editor de la aplicación de Android </li></ul> 
<ul><li> Presione el botón <span class="code">Recortar</span> y luego <span class="code">Atrás</span> para cada video de la historia. (esto anula la longitud informada) </li></ul> 
<ul><li> Guarda la historia y publica nuevamente </li></ul> 

<h2> Aplicación de Android </h2> 

 Si intenta los siguientes pasos y aún tiene problemas para conectarse al Indaba Dashboard, intente deshabilitar el Firewall de Windows. Esto a menudo puede solucionar estos problemas, pero no se recomienda como primer paso.  

<h3> Errores </h3> 

 <strong>Error 1: sin conexión de red</strong>  
 Este error significa que el dispositivo no tiene una conexión WiFi (o 3G).  

 <strong>Error 2: no se puede conectar a la aplicación</strong>  

 <strong>Error 3: clave de API no válida</strong>  

 <strong>Error 4: Tenemos problemas para recuperar su información. Inicie sesión nuevamente para continuar</strong>  

 <strong>Error 5: intente iniciar sesión nuevamente</strong>  

 <strong>Error 6: solicitud cancelada por el participante</strong>  

 <strong>Error 7: error del servidor</strong>  

 <strong>Error 8: Error de red desconocido</strong>  

<h3> Pantalla de conexión </h3> 

 La pantalla de conexión tiene una lista de 4 comprobaciones que la aplicación realiza cuando se inicia. Estas comprobaciones pueden ayudarlo a diagnosticar posibles problemas con su configuración de Indaba.  

<ul><li> <strong>WiFi conectado</strong> : Esto verifica si tiene una conexión WiFi activa a la que está conectado el teléfono. Si esto no está marcado, verifique que el dispositivo esté conectado a su red local de Indaba. </li></ul> 
<ul><li> <strong>Rango de dirección IP correcto</strong> : Esto verifica si la red a la que está conectado está configurada para Indaba, donde se le asigna una dirección IP en el rango 10.10.10.x. Si esto no está marcado, verifique qué WiFi está conectado y verifique que este WiFi sea el Indaba. </li></ul> 
<ul><li> <strong>Aplicación remota encontrada</strong> : Esto comprueba que la computadora Titan Dashboard se puede encontrar en la red WiFi. Si esto no está marcado, verifique que su computadora esté encendida, conectada al WiFi Indaba y que haya configurado su dirección IP correctamente. </li></ul> 
<ul><li> <strong>Conexión establecida</strong> : Esto verifica que la comunicación con el Tablero sea posible. Si no está marcado, verifique que la aplicación Dashboard se esté ejecutando en su computadora y reinicie si es necesario. </li></ul> 

