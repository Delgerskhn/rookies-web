const host = process.env.NODE_ENV == 'development' ? 'localhost:3000' : 'rookies.mn';

const protocol = process.env.NODE_ENV == 'development' ? 'http' : 'https';

export const hostname = `${protocol}://${host}`;
