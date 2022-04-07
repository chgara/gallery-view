if (!process.env.ALCHEMY_API_KEY) {
	throw new Error('ALCHEMY_API_KEY is not set');
}
if (!process.env.ALCHEMY_API_URL) {
	throw new Error('ALCHEMY_API_URL is not set');
}

export const apiKey: string = process.env.ALCHEMY_API_KEY || '';
export const apiUrl: string = process.env.ALCHEMY_API_URL || '';
