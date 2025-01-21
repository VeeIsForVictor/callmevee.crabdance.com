import getDirectusInstance from "$lib/directus";
import { About } from "$lib/models/about/about.js";
import { readSingleton } from "@directus/sdk";
import { parse } from "valibot";
import { JSDOM } from 'jsdom';
import { strict } from "assert";

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    
    const about = parse(About, await directus.request(readSingleton('about')));
    strict(about.about_text !== null);

    const contentDOM = new JSDOM(about.about_text);

    const allHeaders = contentDOM.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const allParagraphs = contentDOM.window.document.querySelectorAll('p');

    for(let idx = 0; idx < allHeaders.length; idx++) {
        const header = allHeaders.item(idx);
        strict(header.classList);
        header.classList.add(header.localName);
    }

    for(let idx = 0; idx < allParagraphs.length; idx++) {
        const paragraph = allParagraphs.item(idx);
        strict(paragraph.classList);
        paragraph.classList.add("not-prose");
    }
    
    about.about_text = contentDOM.serialize()

    return {
        about
    };
}