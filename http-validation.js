import axios from 'axios';
import { errorTreatment } from './index.js';

async function checkStatus(urlArray) {
	try {
		const statusArray = await Promise.all(
			urlArray.map(async url => {
				const res = await axios.get(url);
				return `${res.status} - ${res.statusText}`;
			})
		);

		return statusArray;
	} catch (error) {
		errorTreatment(error);
	}
}

export async function URLValidation(linkArray) {
	const links = linkArray.map(linkObject => Object.values(linkObject).join());
	const status = await checkStatus(links);

	const linkObjects = linkArray.map((link, index) => {
		return {
			...link,
			status: status[index],
		};
	});

	return linkObjects;
}
