document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formBusqueda").addEventListener("submit", function (event) {
        event.preventDefault();
        searchCourses();
    });

    inicio();
});

function searchCourses() {
    var busqueda = document.getElementById("inputBusqueda").value.toLowerCase();
    var cursos = document.querySelectorAll(".curso");

    var cursoEncontrado = false;

    cursos.forEach(function (curso) {
        var titulo = curso.querySelector(".card-title").textContent.toLowerCase();
        if (titulo.includes(busqueda)) {
            curso.style.display = "block";
            cursoEncontrado = true;
        } else {
            curso.style.display = "none";
        }
    });

    if (!cursoEncontrado && busqueda) {
        mostrarModalCompra("Lo lamento pero no disponemos de ese curso.");
    }
}



var botonBorrar = document.createElement('button');
botonBorrar.textContent = ('Borrar');
botonBorrar.className = ('botonLista');
botonBorrar.onclick = function () {
    borrar();
}

var botonComprar = document.createElement('button');
botonComprar.textContent = ('Comprar');
botonComprar.className = ('botonLista');
botonComprar.onclick = function () {
    mostrarModalCompra("Gracias por su compra!");
}

function inicio() {
    showCards();
}

function showCards() {
    fetch('./json/data.json')
        .then((response) => response.json())
        .then((data) => {
            var dataset = data.cursos;

            dataset.forEach(element => {
                var title = document.createElement("h2");
                title.className = "card-title";
                title.textContent = element.nombre;

                var text = document.createElement("p");
                text.className = "card-text";
                text.innerHTML = element.tipo + "<br>Precio: " + element.precio;

                var card = document.createElement("div");
                card.className = "card col-3 curso";


                var img = document.createElement("img");
                img.className = "card-img-top";
                img.src = element.imagen;
                img.alt = "Curso";

                var body = document.createElement("div");
                body.className = "card-body";

                var button = document.createElement("a");
                button.href = "#";
                button.className = "btn btn-primary";
                button.textContent = "Añadir al carrito";

                body.appendChild(title);
                body.appendChild(text);
                body.appendChild(button);

                card.appendChild(img);
                card.appendChild(body);
                document.querySelector(".row.justify-content-around").appendChild(card);

                button.onclick = function () {
                    toAdd(element.nombre);
                };
            });
        })

}

function toAdd(cursoAñadido) {
    var ul = document.querySelector('.dropdown-menu');
    // Buscar si ya existe un elemento con el mismo nombre
    var existingItem = null;
    var lis = ul.querySelectorAll('li');
    lis.forEach(function (li) {
        var h2 = li.querySelector('h2');
        if (h2 && h2.textContent === cursoAñadido) {
            existingItem = li;
        }
    });

    if (existingItem) {
        // Si ya existe, incrementar la cantidad
        var cantidad = existingItem.querySelector('.cantidad');
        cantidad.textContent = parseInt(cantidad.textContent) + 1;

    } else {
        // Si no existe, agregar un nuevo elemento
        var li = document.createElement('li');
        li.className = ('dropdown-li')

        var tituloCompra = document.createElement('h2');
        tituloCompra.textContent = cursoAñadido;

        var cantidadContainer = document.createElement('div');
        cantidadContainer.className = 'cantidad-container';
        cantidadContainer.className = 'row justify-content-center'

        var cantidadTitulo = document.createElement('h4')
        cantidadTitulo.textContent = ('Cantidad: ')
        cantidadTitulo.className = 'col-2'

        var cantidad = document.createElement('h4');
        cantidad.textContent = 1;
        cantidad.className = 'cantidad col-2';

        cantidadContainer.appendChild(cantidadTitulo);
        cantidadContainer.appendChild(cantidad);

        li.appendChild(tituloCompra);
        li.appendChild(cantidadContainer);
        li.appendChild(botonBorrar);
        li.appendChild(botonComprar);
        ul.appendChild(li);
    }

}

function borrar() {
    var ul = document.querySelector('.dropdown-menu');
    ul.innerHTML = '';
}

function mostrarModalCompra(mensaje, curso) {
    var modalCompra = document.getElementById("modalCompra");
    modalCompra.innerText = mensaje;

    var myModal = new bootstrap.Modal(document.querySelector('.bd-example-modal-sm'));

    myModal.show();

    var botonModal = document.getElementById("botonModal")
    botonModal.onclick = function () {
        borrar(curso)
    }

}

