import { assetURL } from "$lib/model-utilities";
import { hexColor, object, pipe, string, url, type InferOutput } from "valibot";

export const Settings = object({
    project_name: string(),
    project_url: pipe(string(), url()),
    project_logo: pipe(string(), assetURL),
    project_color: pipe(string(), hexColor()),
    project_favicon: pipe(string(), assetURL),
    public_foreground: pipe(string(), assetURL),
    public_background: pipe(string(), assetURL)
})

export type Settings = InferOutput<typeof Settings>;