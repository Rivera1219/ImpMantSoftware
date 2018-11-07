/*
$(document).on("ready", function() {
    $('#btnFind').on("click", function() {

*/

$(document).ready(function() {

    $('#btnClean').click(function() {
        ClearForm();
    }); //fin btnClean

    $('#btnFind').click(function() {
        GetPersonaById($('#txtcedula').val());
    }); //fin btnFind

    $('#btnDelete').click(function() {
        DeletePersonById($('#txtcedula').val());
    }); //fin btnDelete

    $('#btnSend').click(function() {
        var estudiante = new Object();

        estudiante.nombre = $('#txtnames').val();
        estudiante.apellido = $('#txtlastname').val();
        estudiante.edad = $('#txtage').val();
        estudiante.cedula = $('#txtcedula').val();
        estudiante.fech_nac = $('txtdate').val();
        estudiante.telefono = $('#txtphone').val();
        estudiante.email = $('#txtemail').val();

        CreatePerson(JSON.stringify(estudiante));

    }); //fin btnSend

    $('#btnMod').click(function() {
        var estudiante = new Object();

        estudiante.cedula = $('#txtcedula').val();
        estudiante.nombre = $('#txtnames').val();
        estudiante.apellido = $('#txtlastname').val();
        estudiante.edad = $('#txtage').val();
        estudiante.fech_nac = $('#txtdate').val();
        estudiante.telefono = $('#txtphone').val();
        estudiante.email = $('#txtemail').val();

        UpdatePerson(estudiante.cedula, JSON.stringify(estudiante));
    });

}); //fin funcion ready

function CreatePerson(estudiante) {
    var url = 'http://localhost:18790/api/estudiantes/';
    $.ajax({
        url: url,
        type: 'POST',
        data: estudiante,
        contentType: "application/json;chartset=utf-8",
        success: ClearForm()
            //datatype: 'estudiantes'
    });
}

function GetPersonaById(cedula) {
    var url = 'http://localhost:18790/api/estudiantes/' + cedula;
    $.getJSON(url)

    .done(function(data) {
            //console.log(data);
            $('#txtnames').val(data.nombre);
            $('#txtlastname').val(data.apellido);
            $('#txtage').val(data.edad);
            $('#txtcedula').val(data.cedula);
            $('#txtdate').val(data.fech_nac);
            $('#txtphone').val(data.telefono);
            $('#txtemail').val(data.email);
        })
        .fail(function(erro) {
            // console.log(erro);
            ClearForm();
        });
} //fin btnFind


//Update person
function UpdatePerson(cedula, estudiante) {
    var url = 'http://localhost:18790/api/estudiantes/' + cedula;
    $.ajax({
        url: url,
        type: 'PUT',
        data: estudiante,
        contentType: "application/json;chartset=utf-8",
        success: ClearForm()
    });
}
//Delete person by id
function DeletePersonById(idPerson) {
    var url = 'http://localhost:18790/api/estudiantes/' + idPerson;
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: "application/json;chartset=utf-8",
        success: ClearForm()
    });
}


function ClearForm() {
    $('#txtnames').val('');
    $('#txtlastname').val('');
    $('#txtage').val('');
    $('#txtcedula').val('');
    $('#txtphone').val('');
    $('#txtdate').val('');
    $('#txtemail').val('');
}




/*
//Get person by id
function GetPersonById(cedula) {
    var url = '/api/Estudiantes/' + cedula;
    $.getJSON(url)
        .done(function(data) {
            $('#names').val(data.names);
            $('#lastname').val(data.lastname);
            $('#age').val(data.age);
            $('#cedula').val(data.cedula);
            $('#date').val(data.date);
            $('#phone').val(data.phone);
            $('#email').val(data.email);
        })
        .fail(function(erro) {
            ClearForm();
        });
}

//Delete person by id
function DeletePersonById(cedula) {
    var url = '/api/Customer/' + cedula;
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: "application/json;chartset=utf-8",
        statusCode: {
            200: function() {
                GetAll();
                ClearForm();
                alert('Student with id: ' + cedula + ' was deleted');
            },
            404: function() {
                alert('Student with id: ' + cedula + ' was not found');
            }
        }
    });
}

//Update person
function UpdatePerson(cedula, estudiante) {
    var url = '/api/Customer/' + cedula;
    $.ajax({
        url: url,
        type: 'PUT',
        data: estudiante,
        contentType: "application/json;chartset=utf-8",
        statusCode: {
            200: function() {
                GetAll();
                ClearForm();
                alert('Student with id: ' + cedula + ' was updated');
            },
            404: function() {
                ClearForm();
                alert('Student with id: ' + cedula + ' was not found');
            },
            400: function() {
                ClearForm();
                alert('Error');
            }
        }
    });
}

function ClearForm() {
    $('#name').val('');
    $('#lastname').val('');
    $('#age').val('');
    $('#cedula').val('');
    $('#phone').val('');
    $('#data').val('');
    $('#email').val('');
}
*/




/*

$(document).ready(function() {

    $('#btnSend').click(function() {

        var errores = '';

        // Validar Nombre ==============================
        if ($('#txtnames').val() == '') {
            errores += '<p>Escriba un nombre</p>';
            $('#txtnames').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtnames').css("border-bottom-color", "#d1d1d1")
        }

        // Validar Apellido ==============================
        if ($('#txtlastname').val() == '') {
            errores += '<p>Escriba un apellido</p>';
            $('#txtlastname').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtlastname').css("border-bottom-color", "#d1d1d1")
        }

        //Validar edad ==============================
        if ($('#txtage').val() == '') {
            errores += '<p>Escriba la edad</p>';
            $('#txtage').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtage').css("border-bottom-color", "#d1d1d1")
        }

        //Validar cedula ==============================
        if ($('#txtcedula').val() == '') {
            errores += '<p>Escriba la cedula</p>';
            $('#txtcedula').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtcedula').css("border-bottom-color", "#d1d1d1")
        }

        //Validar Fecha de nacimiento ==============================
        if ($('#txtdate').val() == '') {
            errores += '<p>Escriba la fecha de nacimiento</p>';
            $('#txtdate').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtdate').css("border-bottom-color", "#d1d1d1")
        }

        //Validar telefono ==============================
        if ($('#txtphone').val() == '') {
            errores += '<p>Escriba el numero de telefono</p>';
            $('#txtphone').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtphone').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if ($('#txtemail').val() == '') {
            errores += '<p>Ingrese un correo</p>';
            $('#txtemail').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtemail').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }


        // CERRANDO MODAL ==============================
        $('#btnClose').click(function() {
            $('.modal_wrap').remove();
        });
    }); //Fin de la funcion del btnSend

    $('#btnFind').click(function() {

        var errores = '';

        //Validar cedula ==============================
        if ($('#txtcedula').val() == '') {
            errores += '<p>Escriba la cedula</p>';
            $('#txtcedula').css("border-bottom-color", "#F14B4B")
        } else {
            $('#txtcedula').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function() {
            $('.modal_wrap').remove();
        });

    }); //Fin de la funcion del btnFind




}); // Fin de la funcion general*/