import getDirectusInstance from "$lib/directus";
import { About } from "$lib/models/about/about.js";
import { readSingleton } from "@directus/sdk";
import { parse } from "valibot";

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    return {
        about: parse(About, await directus.request(readSingleton('about')))
    };
}