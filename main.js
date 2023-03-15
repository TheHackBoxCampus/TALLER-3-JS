// const Campus = {
//     Contact: {
//         Mexico: "+52 648999",
//         Colombia: {
//             Bogota: "+57 3152365455",
//             Medelliin: "+57 3145212325",
//             Bucaramanga: "+57 3118807659"
//         }
//     },
//     Trainers:[
//         {name_trainer: "miguel", 
//          phone: "3188121515",
//          teams: 2,
//          name_group: "Sputnik",
//          salons: [1, 6],
//          email: "example@name.com",
//          schedules: ["6:00am", "2:00pm"]
//         },
//         {name_trainer: "Pepe", 
//          phone: "5115132661",
//          teams: 2,
//          name_group: "Artemis",
//          salons: [1, 6],
//          email: "example@name.com",
//          schedules: ["6:00am", "2:00pm"]
//         },
//         {name_trainer: "jolber", 
//          phone: "5151545545",
//          teams: 2,
//          name_group: "Apolo",
//          salons: [1, 6],
//          email: "example@name.com",
//          schedules: ["6:00am", "2:00pm"]
//         }
//     ],
//     Campers: [
//         {camper: "Miller",
//          phone: "3188987644",
//          team:{
//             name_group: "Sputnik",
//             group: "A1",
//             schedules: ["6:00am", "2:00pm"],
//             days: 5 + "for " + "Week",
//             salons: [2, 6],
//             email: "example@name.com",
//             subjects: ["Web development", "English", "Be"]
//          },
//          level: {
//             neighborhood: "Hamacas", 
//             transport: "Bus",
//             pre_requirement: "",
//             technology: "",
//         },
//         roadMap: {
//             credits: "#",
//             year: 2023, 
//             n_subjects: ""
//         }
//        }
//     ]
// }; 

{/* <option value="trainer1" selected>Miguel</option>
			<option value="trainer2">Bermer</option>
			<option value="trainer3">Jolber</option> */}

let Campus = {}
let form_sede = document.querySelector("#form-campus"); 
let form_info_members = document.querySelector("#form-trainer-camper"); 
let sede_seleccionada = document.querySelector("[name='sede_seleccionada']"); 

const addInfo = (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target));
    if(data.sede in Campus) window.alert("Ya existe")
    else {
        Campus[data.sede] = [];
        sede_seleccionada.insertAdjacentHTML("beforeend", `
        <option value="${data.sede}">${data.sede}</option>
     `); 
    }
}

const addPropertys = (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target));
    if(Campus[sede_seleccionada.value] != undefined) {
        Object.entries(data).forEach(info => Campus[sede_seleccionada.value].unshift(info));
    }
    return console.log(Campus);  
}

form_sede.addEventListener("submit", e => addInfo(e))
form_info_members.addEventListener("submit", (e) => addPropertys(e)); 