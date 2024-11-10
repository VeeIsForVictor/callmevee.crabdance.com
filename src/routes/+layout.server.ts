import { PUBLIC_APIURL } from "$env/static/public";
import { Settings } from "$lib/models/settings";
import { parse } from "valibot";

export async function load({ fetch }) {
    const responseJson = await fetch(`${PUBLIC_APIURL}/settings`).then( val => val.json().then( val => val ) )
    const settings = responseJson.data
    return {
        settings: parse(Settings, settings)
    }
}