import { redirect } from '@sveltejs/kit';
import { DiContainer } from '$lib/infraestructure';
const { } = DiContainer;

export async function load({ locals }) {

    if (!locals.accoundData) {
        throw redirect(302, '/');
    }

    return {

    }
}