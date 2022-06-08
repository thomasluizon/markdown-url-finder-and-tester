#!/usr/bin/env node
import { getFile } from './index.js';
import { URLValidation } from './http-validation.js';

const path = process.argv;

async function processText(filePath) {
	const result = await getFile(filePath[2]);

	if (filePath.includes('validate')) {
		console.log('Validated links: ', await URLValidation(result));
	} else {
		console.log(result);
	}
}

processText(path);
