import getDirectusInstance from '$lib/directus';
import { Languages } from '$lib/models/work/languages';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch)
    return {
        languages: parse(Languages, await directus.request(readItems("languages"))),
    }
}