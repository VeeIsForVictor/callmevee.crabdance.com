import { array, object, type InferOutput } from "valibot";
import { BaseCollection } from "../base";

export const Project = object({
    ...BaseCollection.entries,
});

export const Projects = array(Project);

export type Project = InferOutput<typeof Project>;
export type Projects = InferOutput<typeof Projects>;