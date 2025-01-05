import { object, string, array, type InferOutput, picklist } from 'valibot';
import { BaseCollection } from '../base';

export const Language = object({
    ...BaseCollection.entries,
	status: picklist(['visible', 'hidden']),
    name: string(),
    icon: string()
});

export const Languages = array(Language);

export type Language = InferOutput<typeof Language>;
export type Languages = InferOutput<typeof Languages>;
