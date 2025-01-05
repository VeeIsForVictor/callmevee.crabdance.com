import { object, string, type InferOutput } from "valibot";
import { BaseCollection } from "../base";

export const Framework = object({
    ...BaseCollection.entries,
    name: string(),
    icon: string(),
});

export type Framework = InferOutput<typeof Framework>;