import { Colab_db, Proyects_db } from 'astro:db';
import { db } from 'astro:db';

export async function Get() {
    const colab = await db.select().from(Colab_db);
    const proyects = await db.select().from(Proyects_db);
    return {
        body: JSON.stringify({ colab, proyects }),
    };
}
