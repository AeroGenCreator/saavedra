```html
<!-- PLANTILLA: VISTA LISTA -->
<body x-data="Componente">
<main class="hero">
    <section class="container">
        <div class="columns">
            <div class="column is-1">
                <div class="buttons is-left">
                    <button class="button is-primary is-small is-fullwidth is-rounded" @click="">
                        <span class="icon"><i class="fa-solid fa-circle-plus"></i></span>
                        <span>Nuevo</span>
                    </button>
                </div>
            </div>
            <div class="column is-3">
                <div class="field">
                    <div class="control is-small has-icons-left">
                        <input class="input is-small is-rounded" type="text" placeholder="Buscador por nombre" x-model="">
                        <span class="icon is-small is-left"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="buttons is-left">
                    <button
                        class="button is-info is-small is-rounded"
                        @click=""
                        :disabled=""
                    >
                        <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span>Buscar</span>
                    </button>
                    <button class="button is-danger is-small is-rounded" @click="" x-show="">
                        <span class="icon"><i class="fa-solid fa-spray-can-sparkles"></i></span>
                        <span>Limpiar</span>
                    </button>
                </div>
            </div>
            <div class="column is-4">
                <div class="buttons is-right">
                    <button class="button is-small is-warning" @click="" :disabled="">
                        <span class="icon"><i class="fa-solid fa-minus"></i></span>
                    </button>
                    <span class="button is-static is-small is-text" x-text="`Página ${page}`"></span>
                    <button class="button is-small is-warning" @click="" :disabled="">
                        <span class="icon"><i class="fa-solid fa-plus"></i></span>
                    </button>
                </div>
            </div>
        </div>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                <template x-for="" :key="">
                    <tr @click="" class="focus">
                        <td x-text=""></td>
                    </tr>
                </template>
                <tr x-show="">
                    <td colspan="1">...</td>
                </tr>
            </tbody>
        </table>
    </section>
</main>
</body>
```
