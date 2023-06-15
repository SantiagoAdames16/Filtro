// Función para agregar un nuevo cliente
function agregarCliente() {
    var clienteID = document.getElementById("clienteID").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var placa = document.getElementById("placa").value;
    var tipo = document.getElementById("tipo").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;

    // Aquí puedes realizar las validaciones necesarias

    // Crea una nueva fila en la tabla con los datos del cliente
    var tablaClientes = document.getElementById("tabla-clientes");
    var newRow = tablaClientes.insertRow();

    newRow.innerHTML = "<td>" + clienteID + "</td><td>" + nombre + "</td><td>" + apellido + "</td><td>" + placa + "</td><td>" + tipo + "</td><td>" + correo + "</td><td>" + telefono + "</td><td><button class='eliminar' onclick='eliminarCliente(this)'><i class='ri-delete-bin-6-line'></i></button></td><td><button class='editar' onclick='editarCliente(this)'><i class='ri-edit-line'></i></button></td>";

    // Limpia los campos de entrada
    document.getElementById("clienteID").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
}

// Función para eliminar un cliente
function eliminarCliente(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Función para editar un cliente
function editarCliente(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    // Obtén los datos del cliente de las celdas
    var clienteID = cells[0].innerHTML;
    var nombre = cells[1].innerHTML;
    var apellido = cells[2].innerHTML;
    var placa = cells[3].innerHTML;
    var tipo = cells[4].innerHTML;
    var correo = cells[5].innerHTML;
    var telefono = cells[6].innerHTML;

    // Actualiza los campos de entrada con los datos del cliente
    document.getElementById("clienteID").value = clienteID;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("placa").value = placa;
    document.getElementById("tipo").value = tipo;
    document.getElementById("correo").value = correo;
    document.getElementById("telefono").value = telefono;

    // Elimina la fila del cliente
    row.parentNode.removeChild(row);
}

// Función para agregar un nuevo servicio
function agregarServicio() {
    var servicioID = document.getElementById("servicioID").value;
    var servicio = document.getElementById("servicio").value;
    var precio = document.getElementById("precio").value;
    var descripcion = document.getElementById("descripcion").value;
    var puntos = document.getElementById("puntos").value;

    // Aquí puedes realizar las validaciones necesarias

    // Crea una nueva fila en la tabla con los datos del servicio
    var tablaServicios = document.getElementById("tabla-servicios");
    var newRow = tablaServicios.insertRow();

    newRow.innerHTML = "<td>" + servicioID + "</td><td>" + servicio + "</td><td>" + precio + "</td><td>" + descripcion + "</td><td>" + puntos + "</td><td><button class='eliminar-servicio' onclick='eliminarServicio(this)'><i class='ri-delete-bin-6-line'></i></button></td>";

    // Limpia los campos de entrada
    document.getElementById("servicioID").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("puntos").value = "";
}

// Función para eliminar un servicio
function eliminarServicio(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Asigna los eventos a los botones
document.getElementsByClassName("registrar")[0].addEventListener("click", agregarCliente);
document.getElementsByClassName("crear-servicio")[0].addEventListener("click", agregarServicio);