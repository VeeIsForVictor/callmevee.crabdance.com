import getDirectusInstance from '$lib/directus';
import { Skills } from '$lib/models/work/skills';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    const skills = parse(Skills, await directus.request(readItems('skills')))

    const languages = skills.filter((val) => val.type == 'language');
    const frameworks = skills.filter((val) => val.type == 'framework');
    const technologies = skills.filter((val) => val.type == 'technology');

    return {
        languages,
        frameworks,
        technologies,
    }
}