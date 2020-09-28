console.log('EXECUTE INIT');
db.auth('root', 'root')

console.log('DB', db);
db = db.getSiblingDB('voicemod-test')

db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'readWrite',
      db: 'voicemod-test',
    },
  ],
});
