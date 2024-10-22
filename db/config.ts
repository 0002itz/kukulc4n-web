import { defineDb , defineTable, column } from 'astro:db';

const Colab_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        colab_name: column.text(),
        tecnolig: column.text(),
        desafios: column.text(),
        corro: column.text(),
        proyect_list: column.text()
    }
})

const Proyects_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        proyect_name: column.text(),
        descripscion: column.text(),
        tecnolig: column.text(),
        colab_list: column.text(),
    }
})
// https://astro.build/db/config
export default defineDb({
    tables: { Colab_db, Proyects_db },
})
