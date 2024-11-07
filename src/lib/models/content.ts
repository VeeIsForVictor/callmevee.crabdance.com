import { cleanHtml } from "$lib/model-utilities"
import { array, literal, nullable, number, object, picklist, pipe, string, unknown, variant } from "valibot"

// header = { text, level }
export const header = object({
    text: string(),
    level: number()
})

// paragraph = { text }
export const paragraph = object({
    text: string()
})

//  nestedlistItems = { content, items }
export const nestedlistItems = object({
    content: string(),
    items: array(nullable(unknown()))
})

// nestedlist = { style, items }
export const nestedlist = object({
    items: array(nestedlistItems),
    style: picklist(["unordered", "ordered"])
})

// code = { code }
export const code = object({
    code: string()
})

// quote = { text, caption }
export const quote = object({
    text: string("Expecting text here"),
    caption: string()
})

// raw = { html }
export const raw = object({
    html: pipe(string(), cleanHtml)
})

export const block = variant("type", [
    object({
        type: literal('header'),
        data: header,
    }),
    object({
        type: literal('paragraph'),
        data: paragraph,
    }),
    object({
        type: literal('nestedlist'),
        data: nestedlist,
    }),
    object({
        type: literal('code'),
        data: code,
    }),
    object({
        type: literal('quote'),
        data: quote,
    }),
    object({
        type: literal('raw'),
        data: raw,
    }),
])

export const content = array(block)