let Campus = {sedes: {contacto:[]}};
let form_sede = document.querySelector("#form-campus");
let form_info_members = document.querySelector("#form_usuarios");
let sede_seleccionada = document.querySelector("[name='sede_seleccionada']");
let tmp;
let object_union;

const addInfo = (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target));
  let sede = data.sede;
  if (sede in Campus["sedes"]) Swal.fire({ icon: "error", title: "Ya existe" });
  else if (sede != "") {
    Campus["sedes"][sede] = { integrantes: [] };
    let info_contacto = {
        sede: sede,
        contacto: data.contacto_sede,
        direccion: data.direccion_sede,
    };
    Campus.sedes.contacto.unshift(info_contacto)
    sede_seleccionada.insertAdjacentHTML(
      "beforeend",
      `
        <option  value="${data.sede}">${data.sede}</option>
     `
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "Campo vacio",
    });
  }
  form_sede.reset();
};

const addPropertys = (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target));
  if (Campus["sedes"][sede_seleccionada.value] != undefined) {
    tmp = [];
    Object.entries(data).forEach((info) => {
      let atpm = Object.fromEntries([info]);
      tmp.push(atpm);
    });
    for (let x = 0; x < tmp.length; x++) {
      object_union = {
        Camper: [
          {
            ...tmp[x],
            ...tmp[x + 1],
            ...tmp[x + 2],
            ...tmp[x + 3],
            ...tmp[x + 4],
            ...tmp[x + 5],
            ...tmp[x + 6],
            ...tmp[x + 7],
          },
        ],

        nivel: [
          {
            ...tmp[x + 8],
            ...tmp[x + 9],
            ...tmp[x + 10],
          },
        ],

        Trainer: [
          {
            ...tmp[x + 11],
            ...tmp[x + 12],
            ...tmp[x + 13],
            ...tmp[x + 14],
            ...tmp[x + 15],
            ...tmp[x + 16],
            ...tmp[x + 17]
          },
        ],

        RoadMap: [
          {
            ...tmp[x + 18],
            ...tmp[x + 19],
            ...tmp[x + 20],
            ...tmp[x + 21],
          },
        ],
      };
      break;
    }
  }
  Campus["sedes"][sede_seleccionada.value]["integrantes"].unshift(object_union);
  form_info_members.reset();
  return (
    Swal.fire({
      icon: "success",
      title: "Envio realizado",
      text: "Los datos se enviaron de forma exitosa",
    }),
    console.log(Campus)
  );
};

// consulta con Destructuracion 
const consulta = (CAMPUS) => {
  let lugar = sede_seleccionada.value;
  const {sedes:{Bucaramanga: {integrantes:[{Camper: [{nombre_salon}],Trainer:[{tipo_tecnologia}]}]}}} = CAMPUS
  console.log(`La asignatura es: ${tipo_tecnologia} y el nombre del salon del camper es ${nombre_salon}` ); 
}

form_sede.addEventListener("submit", (e) => addInfo(e));
form_info_members.addEventListener("submit", (e) => {
  addPropertys(e)
  consulta(Campus); 
});