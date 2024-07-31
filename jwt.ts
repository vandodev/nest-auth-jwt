const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  username: 'user1@user.com',
  name: 'Evandro oliveira',
  exp: new Date().getTime(), //timestamp
};

const key = 'abcd123456';

const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64')
const payloadEncoded = Buffer.from(JSON.stringify(header)).toString('base64') 

console.log(headerEncoded, payloadEncoded)
//digine no terminal
//node_modules/.bin/ts-node jwt.ts
