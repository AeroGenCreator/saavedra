
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge\&logo=go\&logoColor=white\&labelColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=white\&labelColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white\&labelColor=black)
![CSS](https://img.shields.io/badge/CSS-CSS?style=for-the-badge&logo=CSS&logoColor=white&labelColor=black&color=purple
)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge\&logo=sqlite\&logoColor=white\&labelColor=black)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=for-the-badge\&logo=alpine.js\&logoColor=white\&labelColor=black)
![JWT](https://img.shields.io/badge/jwt-jwt?style=for-the-badge&logo=jsonwebtokens&logoColor=white&labelColor=black&color=yellow
)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge\&logo=python\&logoColor=white\&labelColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge\&logo=fastapi\&logoColor=white\&labelColor=black)
![PyPI](https://img.shields.io/badge/PyPI-3775A9?style=for-the-badge\&logo=pypi\&logoColor=white\&labelColor=black)
![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge\&logo=pytest\&logoColor=white\&labelColor=black)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge\&logo=linux\&logoColor=black\&labelColor=white)
![macOS](https://img.shields.io/badge/macos-macos?style=for-the-badge&logo=apple&logoColor=white&labelColor=black&color=pink
)
![Bulma](https://img.shields.io/badge/bulma-bulma?style=for-the-badge&logo=bulma&logoColor=white&labelColor=black&color=brown
)

# 🖌️ Saavedra

Saavedra es una caja de herramientas unida a través de un contrato de flujos.

- Saavedra fue pensado para el desarrollo de servicios empresariales así mismo se tomó inspiracion de los módulos de los ERPs modernos.

Sin embargo cada servicio se construye desde cero lo cual facilita la personalización por cliente.

## 🚀 Inicio Rápido

En lugar de clonar, se recomienda descargar el `.zip`. De esta manera cada nuevo proyecto podra ser respaldado en un repositorio distinto sin necesidad de ser rechazado por el repositorio original.

Una vez tengas una copia de saavedra cualquier código extra podra ser agregado o eliminado sin problema.

Sin embargo es recomendable seguir los siguientes pasos.

- [Tutorial Básico (construye un CRUD)]()
- [Filosofía]()
- [Documentación (fragmentos y piezas)]()

Es importante resaltar que el tutorial es corto. Pues saavedra no es un `motor` de desarrollo en su lugar es una serie de contratos de flujo y fragmentos de código reutilizables faciles de implementar.

## 🏛️ Sobre Saavedra

### 📦 Backend

El backend de saavedra se inspira en `repositoy pattern`. Esto es fundamental para construir CRUDs explicitos y desacoplados sin depender de `Frameworks` o `ORMs`.

### 🎨 Frontend

El frontend hace peticiones gracias a `alpine.js`. Las peticiones viajan de manera segura gracias a funciones `javascript` reutilizables.

### 📖 Principios

- Cada servicio resuelve una necesidad de negocio.
- La data auditable se almacena en la base de datos mientras que la volatil en JSON.
- Codificación explicita.
- Asistencia de IA permitida gracias a la separación de modulos, servicios, capas.

```go
type Bienvenido struct {
  Tutorial string `json:"tutorial"`
  Proyectos []int `json:"proyectos"`
}

func Construir() {
	servicios := []int{1,2,3,4,5}
	proyectos := Bienvenido{
		Proyectos: servicios
	}
}
```
