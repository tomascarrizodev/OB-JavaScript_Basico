const nombre = 'Tomás';

const apellido = 'Carrizo';

const estudiante = `${nombre} ${apellido}`;

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const numeroDeLetras = estudiante.length;

const primeraLetraNombre = nombre.at(0);

const ultimaLetraApellido = estudiante.at(numeroDeLetras - 1);

const sinEspacios = estudiante.replace(/ /g, '');

const bool = estudiante.includes(nombre);