import { array, object, string, type InferOutput } from "valibot";
import { BaseCollection } from "../base";

export const Technology = object({
    ...BaseCollection.entries,
    name: string(),
    icon: string(),
});

export const Technologies = array(Technology);

export type Technology = InferOutput<typeof Technology>;
export type Technologies = InferOutput<typeof Technologies>;