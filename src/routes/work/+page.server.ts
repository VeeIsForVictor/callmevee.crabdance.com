import getDirectusInstance from '$lib/directus';
import { Frameworks } from '$lib/models/work/frameworks.js';
import { Languages } from '$lib/models/work/languages';
import { Technologies } from '$lib/models/work/technologies.js';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch)
    return {
        languages: parse(Languages, await directus.request(readItems("languages"))),
        frameworks: parse(Frameworks, await directus.request(readItems("frameworks"))),
        technologies: parse(Technologies, await directus.request(readItems("technologies"))),
    }
}