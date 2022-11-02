const {writeFile} = require('fs');

for (const prod of [true, false]) {
  const environmentFileContent = `export const environment = {
   production: ${prod},
   gitToken: "${process.env['GRAPHQL_TOKEN']}",
};`;
  console.log(environmentFileContent); //@TODO: REMOVE AFTER DEBUG.
  const targetPath = `./src/environments/environment${prod ? '.prod' : ''}.ts`
  writeFile(targetPath, environmentFileContent, (e: any) => {
    console.log(`Error while config ${prod ? 'prod' : ''}: ${e}`);
  })
}


