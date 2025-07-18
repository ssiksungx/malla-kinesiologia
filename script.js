const malla = [
  // PRIMER AÑO
  { id: "MF1", nombre: "Morfofunción I", semestre: 1, prerrequisitos: [] },
  { id: "BIOCEL", nombre: "Biología Celular y Molecular", semestre: 1, prerrequisitos: [] },
  { id: "BASESBF", nombre: "Bases Matemáticas y Biofísicas", semestre: 1, prerrequisitos: [] },
  { id: "FUNDKIN", nombre: "Fundamentos de la Kinesiología", semestre: 1, prerrequisitos: [] },
  { id: "MF2", nombre: "Morfofunción II", semestre: 2, prerrequisitos: ["MF1"] },
  { id: "QUIBIOQ", nombre: "Química y Bioquímica", semestre: 2, prerrequisitos: [] },
  { id: "BIOETICA", nombre: "Bioética", semestre: 2, prerrequisitos: [] },
  { id: "BASESMOV", nombre: "Bases del Movimiento Humano", semestre: 2, prerrequisitos: ["BASESBF"] },
  { id: "ING1", nombre: "Inglés I", semestre: 2, prerrequisitos: [] },
  { id: "CFG1", nombre: "Curso de Formación General (1)", semestre: 2, prerrequisitos: [] },

  // SEGUNDO AÑO
  { id: "FHS", nombre: "Funcionamiento Humano y Salud", semestre: 3, prerrequisitos: ["MF2"] },
  { id: "DSM", nombre: "Desempeño Sensoriomotor en Kinesiología", semestre: 3, prerrequisitos: ["BASESMOV"] },
  { id: "ING2", nombre: "Inglés II", semestre: 3, prerrequisitos: ["ING1"] },
  { id: "CFG2", nombre: "Curso de Formación General (2)", semestre: 3, prerrequisitos: [] },
  { id: "CFG3", nombre: "Curso de Formación General (3)", semestre: 3, prerrequisitos: [] },
  { id: "AD", nombre: "Análisis de Datos", semestre: 4, prerrequisitos: [] },
  { id: "FISIO", nombre: "Fisiología de la Actividad Física y Ejercicio", semestre: 4, prerrequisitos: ["BIOCEL"] },
  { id: "ABIOMOV", nombre: "Análisis Bioinstrumental del Movimiento Humano", semestre: 4, prerrequisitos: ["DSM"] },
  { id: "ING3", nombre: "Inglés III", semestre: 4, prerrequisitos: ["ING2"] },
  { id: "CFG4", nombre: "Curso de Formación General (4)", semestre: 4, prerrequisitos: [] },

  // TERCER AÑO
  { id: "SALPUB", nombre: "Salud Pública y Epidemiología", semestre: 5, prerrequisitos: [] },
  { id: "ACAFE", nombre: "Aplicación Clínica de la Actividad Física y Ejercicio", semestre: 5, prerrequisitos: ["FISIO"] },
  { id: "EVKINMUS", nombre: "Evaluaciones en Kinesiología Musculoesquelética", semestre: 5, prerrequisitos: ["FHS"] },
  { id: "EVKINCARD", nombre: "Evaluaciones en Kinesiología Cardiorrespiratoria", semestre: 5, prerrequisitos: ["FISIO"] },
  { id: "EVKINNEURO", nombre: "Evaluaciones en Neurokinesiología", semestre: 5, prerrequisitos: ["ABIOMOV"] },
  { id: "INV1", nombre: "Proyecto de Investigación I", semestre: 6, prerrequisitos: ["AD"] },
  { id: "INTMUS", nombre: "Intervenciones en Kinesiología Musculoesquelética", semestre: 6, prerrequisitos: ["EVKINMUS"] },
  { id: "INTCARD", nombre: "Intervenciones en Kinesiología Cardiorrespiratoria", semestre: 6, prerrequisitos: ["EVKINCARD"] },
  { id: "INTNEURO", nombre: "Intervenciones en Neurokinesiología", semestre: 6, prerrequisitos: ["EVKINNEURO"] },
  { id: "AGFIS", nombre: "Agentes Físicos en Kinesiología", semestre: 6, prerrequisitos: [] },
  { id: "CFG5", nombre: "Curso de Formación General (5)", semestre: 6, prerrequisitos: [] },

  // CUARTO AÑO
  { id: "INV2", nombre: "Proyecto de Investigación II", semestre: 7, prerrequisitos: ["INV1"] },
  { id: "GESTION", nombre: "Gestión y Administración en Salud", semestre: 7, prerrequisitos: ["SALPUB"] },
  { id: "SALMENTAL", nombre: "Salud Mental", semestre: 7, prerrequisitos: [] },
  { id: "OP1", nombre: "Optativo Profundización (1)", semestre: 7, prerrequisitos: [] },
  { id: "OP2", nombre: "Optativo Profundización (2)", semestre: 7, prerrequisitos: [] },
  { id: "CFG6", nombre: "Curso de Formación General (6)", semestre: 7, prerrequisitos: [] },
  { id: "INTEGRA", nombre: "Integración de Acciones en Kinesiología", semestre: 8, prerrequisitos: ["OP1"] },
  { id: "INNOVACION", nombre: "Innovación y Emprendimiento en Salud", semestre: 8, prerrequisitos: ["GESTION"] },
  { id: "APS", nombre: "APS y Salud Familiar y Comunitaria", semestre: 8, prerrequisitos: [] },
  { id: "OP3", nombre: "Optativo Profundización (3)", semestre: 8, prerrequisitos: [] },
  { id: "OP4", nombre: "Optativo Profundización (4)", semestre: 8, prerrequisitos: [] },

  // QUINTO AÑO
  {
    id: "INT1",
    nombre: "Internado Profesional I",
    semestre: 9,
    prerrequisitos: [
      "MF1", "BIOCEL", "BASESBF", "FUNDKIN", "MF2", "QUIBIOQ", "BIOETICA",
      "BASESMOV", "ING1", "CFG1", "FHS", "DSM", "ING2", "CFG2", "CFG3", "AD",
      "FISIO", "ABIOMOV", "ING3", "CFG4", "SALPUB", "ACAFE", "EVKINMUS",
      "EVKINCARD", "EVKINNEURO", "INV1", "INTMUS", "INTCARD", "INTNEURO",
      "AGFIS", "CFG5", "INV2", "GESTION", "SALMENTAL", "OP1", "OP2", "CFG6",
      "INTEGRA", "INNOVACION", "APS", "OP3", "OP4"
    ]
  },
  { id: "INT2", nombre: "Internado Profesional II", semestre: 9, prerrequisitos: ["INT1"] },
  { id: "INT3", nombre: "Internado Profesional III", semestre: 10, prerrequisitos: ["INT2"] },
  { id: "INT4", nombre: "Internado Profesional IV", semestre: 10, prerrequisitos: ["INT1"] }
];

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function actualizarEstado(div, ramo) {
  const aprobado = estado[ramo.id] === true;
  const requisitosCumplidos = ramo.prerrequisitos.every((id) => estado[id]);

  div.className = "ramo"; // Resetear clases
  if (aprobado) {
    div.classList.add("aprobado");
  } else if (!requisitosCumplidos && ramo.prerrequisitos.length > 0) {
    div.classList.add("bloqueado");
  }
}

function crearMalla() {
  const grid = document.getElementById("grid-container");
  grid.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "semester";
    columna.innerHTML = `<strong>Semestre ${i}</strong>`;

    malla
      .filter((ramo) => ramo.semestre === i)
      .forEach((ramo) => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.textContent = ramo.nombre;
        div.dataset.id = ramo.id;

        actualizarEstado(div, ramo);

        div.addEventListener("click", () => {
          if (div.classList.contains("bloqueado")) return;
          estado[ramo.id] = !estado[ramo.id];
          guardarEstado();
          crearMalla();
        });

        columna.appendChild(div);
      });

    grid.appendChild(columna);
  }
}

crearMalla();
