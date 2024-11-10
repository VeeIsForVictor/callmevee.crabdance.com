import { browser, building, dev } from '$app/environment';
import { posthog } from 'posthog-js';

export const prerender = false;
export const trailingSlash = 'always';

export async function load({ data }) {
	if (browser && !building && !dev)
		posthog.init('phc_NrDuYMJQoD43Iz0eCi8IEHspeRev9aLt610hnBK2894', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'never',
			capture_pageview: false,
			capture_pageleave: false
		});
	return data;
}
