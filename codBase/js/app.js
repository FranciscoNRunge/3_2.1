var Form_dat = {
    nombre: "",
    user: "",
    contrasena: "",
    email: "",
    fecha: "",
    text_area: "",
    sub: "",
    city: " ", 
    direc:"",
    tel: "" ,
    cel: " ", 
    nation: "",
    female: false,
    male: false,
    efec: false,
    credit: false, 
    mostrar_dat: function(){
        console.log("Nombre ->" +this.nombre);
        console.log("Usuario ->" +this.user);
        console.log("Contraseña ->" +this.contraseña);
        console.log("email ->" +this.email);
        console.log("fecha" +this.fecha);
        console.log("descripcion ->" +this.text_area);
        console.log("suscripcion" +this.sub);
        console.log("ciudad ->" +this.city);
        console.log("direccion" +this.direc);
        console.log("telefono" +this.tel);
        console.log("celular" +this.cel);
        console.log("nacionlidad ->" +this.nation);
        console.log("Genero ->" +this.female);
        console.log("Genero ->" +this.male);
        console.log("tipo de pago .>" +this.efec);
        console.log("tipo de pago .>" +this.credit);
    }
}


document.getElementById('submit').addEventListener("click", function(){
    Form_dat.nombre = document.getElementsByClassName("nombre")[0].value;
    Form_dat.user = document.getElementsByClassName("nombre_usuario")[0].value;
    Form_dat.contrasena = document.getElementsByClassName("password")[0].value;
    Form_dat.email = document.getElementsByName("email")[0].value;
    Form_dat.fecha = document.getElementsByName("fecha_nacimiento")[0].value;
    Form_dat.text_area = document. getElementsByTagName("textarea")[0].value;
    Form_dat.sub = document.getElementsByName("suscripcion")[0].value;
    Form_dat.city = document.getElementsByName("ciudad_residencia")[0].value;
    Form_dat.direc = document.getElementsByName("direccion")[0].value;
    Form_dat.tel = document.getElementsByName("telefono")[0].value;
    Form_dat.cel = document.getElementsByName("celular")[0].value;
    Form_dat.nation = document.getElementsByName("nacionalidad")[0].value;
    Form_dat.female = document.getElementById("femenino")[0].checked;
    Form_dat.male = document.getElementById("masculino")[0].checked;
    Form_dat.efec = document.getElementById("efectivo")[0].checked;
    Form_dat.credit = document.getElementById("credito")[0].checked;


    Form_dat.mostrar_dat();
})
