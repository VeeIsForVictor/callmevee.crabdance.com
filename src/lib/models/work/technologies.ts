import { object, string, type InferOutput } from "valibot";
import { BaseCollection } from "../base";

export const Technology = object({
    ...BaseCollection.entries,
    name: string(),
    icon: string(),
});

export type Technology = InferOutput<typeof Technology>;