const {writeFile} = require('fs');

for (const prod in [true, false]) {
  const environmentFileContent = `export const environment = {
   production: ${prod},
   gitToken: "${process.env['TOKEN']}",
};`;
  const targetPath = `./src/environments/environment${prod ? '.prod' : ''}.ts`
  writeFile(targetPath, environmentFileContent, (e: any) => {
    console.log(`Error while config ${prod ? 'prod' : ''}: ${e}`);
  })
}


