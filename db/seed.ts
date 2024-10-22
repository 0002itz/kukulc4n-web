import { db, Colab_db, Proyects_db, } from 'astro:db';

export default async function seed() {
	await db.insert(Colab_db).values([
		{
			colab_name: "0002itz",
			tecnolig: "Py, Django, Tkinter, HTLM, CSS, Js, Astro, Ts, React, MYSQL, SQL, Docker.",
			desafios: "Enfocarce en un solo tema.",
			corro: "rodrigocorreodetrabajo13@gmail.com",
			proyect_list: "Calculadora_D_Pitagoras, Convertidor_D_Imagenes, Extractor de Metadatos-imganes, Migracion_D_datos, link-tree, Diseño de red, Home-lab.",
		},
	]);
	await db.insert(Proyects_db).values([
		{
			proyect_name: "Calculadora_D_Pitagoras",
			descripscion: "Los principis de pitagoras en una calculadorea app de escritorio en win 10.",
			tecnolig: "Py, Tkinter",
			colab_list: "0002itz",
		},
	]);
}

