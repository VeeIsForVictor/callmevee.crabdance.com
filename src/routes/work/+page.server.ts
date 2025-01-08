import getDirectusInstance from '$lib/directus';
import { Projects } from '$lib/models/work/projects';
import { Skills } from '$lib/models/work/skills';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    const skills = parse(Skills, await directus.request(readItems('skills')));
    const projects = parse(Projects, await directus.request(readItems('projects')));

    const languages = skills.filter((val) => val.type == 'language');
    const frameworks = skills.filter((val) => val.type == 'framework');
    const technologies = skills.filter((val) => val.type == 'technology');

    return {
        languages,
        frameworks,
        technologies,
        projects
    }
}