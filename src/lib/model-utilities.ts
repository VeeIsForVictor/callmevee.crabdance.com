import sanitize from 'sanitize-html';
import { isoTimestamp, nullable, pipe, string, transform } from 'valibot';

// valibot transform for cleaning html
export const cleanHtml = transform((input: string) => sanitize(input));

// validation shortcuts for dates (created and updated), note that dateUpdateds can be null
export const validateDateCreated = pipe(string(), isoTimestamp());
export const validateDateUpdated = nullable(pipe(string(), isoTimestamp()));