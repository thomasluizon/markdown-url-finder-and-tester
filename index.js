import fs from 'fs';

export function errorTreatment(err) {
	throw new Error(err);
}

function getLinks(text) {
	const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
	const arr = [];
	let temp;

	while ((temp = regex.exec(text))) {
		arr.push({ [temp[1]]: temp[2] });
	}

	if (arr.length === 0) return 'No links were found';

	return arr;
}

export async function getFile(filePath) {
	try {
		const text = await fs.promises.readFile(filePath, 'utf-8');
		return getLinks(text);
	} catch (err) {
		errorTreatment(err);
	}
}
