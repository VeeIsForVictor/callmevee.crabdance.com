import { object, string } from "valibot";

export const Tag = object({
    tag_name: string()
});