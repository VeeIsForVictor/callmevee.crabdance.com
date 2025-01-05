import { validateDateCreated, validateDateUpdated } from '$lib/model-utilities';
import { object, string, array, type InferOutput, number, picklist } from 'valibot';

export const Language = object({
	id: number(),
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
	status: picklist(['visible', 'hidden']),
    name: string(),
    icon: string()
});

export const Languages = array(Language);

export type Language = InferOutput<typeof Language>;
export type Languages = InferOutput<typeof Languages>;
