import { getFile } from '../index.js';

const arrayResult = [
	{
		FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
	},
];

describe('getFile::', () => {
	it('has to be a function', () => {
		expect(typeof getFile).toBe('function');
	});

	it('must return an array of results', async () => {
		const result = await getFile(
			'D:/programming/languages/node/lib-markdown/test/files/text1.md'
		);
		expect(result).toStrictEqual(arrayResult);
	});

	it('must return a message saying that has no links', async () => {
		const result = await getFile(
			'D:/programming/languages/node/lib-markdown/test/files/text1nolink.md'
		);

		expect(result).toBe('No links were found');
	});
});
