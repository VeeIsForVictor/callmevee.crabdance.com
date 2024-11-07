import { cleanHtml } from "$lib/model-utilities"
import { array, literal, nullable, number, object, picklist, pipe, string, unknown, variant, type InferOutput } from "valibot"

// header = { text, level }
export const Header = object({
    text: string(),
    level: number()
})

// paragraph = { text }
export const Paragraph = object({
    text: string()
})

//  nestedlistItems = { content, items }
export const NestedlistItems = object({
    content: string(),
    items: array(nullable(unknown()))
})

// nestedlist = { style, items }
export const Nestedlist = object({
    items: array(NestedlistItems),
    style: picklist(["unordered", "ordered"])
})

// code = { code }
export const Code = object({
    code: string()
})

// quote = { text, caption }
export const Quote = object({
    text: string("Expecting text here"),
    caption: nullable(string())
})

// raw = { html }
export const Raw = object({
    html: pipe(string(), cleanHtml)
})

export const Block = variant("type", [
    object({
        type: literal('header'),
        data: Header,
    }),
    object({
        type: literal('paragraph'),
        data: Paragraph,
    }),
    object({
        type: literal('nestedlist'),
        data: Nestedlist,
    }),
    object({
        type: literal('code'),
        data: Code,
    }),
    object({
        type: literal('quote'),
        data: Quote,
    }),
    object({
        type: literal('raw'),
        data: Raw,
    }),
])

export const Content = array(Block)
export type Content = InferOutput<typeof Content>;

export type Header = InferOutput<typeof Header>;
export type Paragraph = InferOutput<typeof Paragraph>;
export type Nestedlist = InferOutput<typeof Nestedlist>;
export type Code = InferOutput<typeof Code>;
export type Quote = InferOutput<typeof Quote>;
export type Raw = InferOutput<typeof Raw>;