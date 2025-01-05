import { array, object, string, type InferOutput } from "valibot";
import { BaseCollection } from "../base";

export const Framework = object({
    ...BaseCollection.entries,
    name: string(),
    icon: string(),
});

export const Frameworks = array(Framework);

export type Framework = InferOutput<typeof Framework>;
export type Frameworks = InferOutput<typeof Frameworks>;