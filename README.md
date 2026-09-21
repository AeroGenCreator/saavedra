
#### Cabecera HTML estandar

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- Bulma maneja los escalados automaticamente -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Importar Bulma -->
    <link rel="stylesheet" href="/assets/css/bulma/css/bulma.min.css">
    <!-- Hoja de estilos de Saavedra -->
    <link rel="stylesheet" href="/assets/css/saavedra/saavedra.css">
    <!-- Importar Font Awsome Icons -->
    <script src="https://kit.fontawesome.com/75d1a8fea1.js" crossorigin="anonymous"></script>
    <!-- Importar Codigo JavaScript Reutilizable -->
    <script defer src="/assets/src/utils/utils.js"></script>
    <!-- Importar Codigo JavaScript del servicio en cuestión -->
    <script defer src=""></script>
    <!-- Importar Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.17.3/dist/cdn.min.js"></script>
    <title>Servicio</title>
</head>
```

#### Agregar un nuevo menu

```html
<!-- SECCIÓN DE ITEMS DE MENU -->
<section class="container">
    <div class="columns is-multiline">
        <!-- ITEMS DE MENU -->
        <!-- ANCHO POR DEFECTO DE LA COLUMNA -->
        <div class="column is-3">
            <!-- NOTIFICACION BULMA CSS + CLICKABLE (HOVER) + MENUITEM (ESCONDE TEXTOS LARGOS) -->
            <div class="notification is-primary clickable menuitem">
                <span class="icon-text">
                    <!-- ICONOS INTERCAMBIABLES -->
                    <span class="icon"><i class="fa-solid fa-users"></i></span>
                    <span><h2 class="subtitle">Usuarios</h2></span>
                </span>
                <!-- DESCRIPCIÓN CORTA DEL SERVICIO -->
                <p class="is-size-7">Agrega, edita y elimina usuarios.</p>
            </div>
        </div>
    </div>
</section>
```
