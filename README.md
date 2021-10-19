# Nodejs Function with Private AR Dependencies

This sample demonstrates installing packages from a private AR npm repository when deploying a function to GCF.

It works by running the [google-artifactregistry-auth](https://www.npmjs.com/package/google-artifactregistry-auth) tool in a [preinstall hook](https://docs.npmjs.com/cli/v7/commands/npm-install). See `package.json` for more details.

@3.0.0 was crucial


weird intermittent error:

❯ npm run preinstall

> proj@1.0.0 preinstall
> npx google-artifactregistry-auth

Need to install the following packages:
  google-artifactregistry-auth
Ok to proceed? (y) y
Retrieving application default credentials...
Failed to retrieve application default credentials: A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: Could not refresh access token: Unsuccessful response status code. Request failed with status code 404.
Retrieving credentials from gcloud...
Retrieved credentials from the current active account from gcloud.
[Error: ENOENT: no such file or directory, open '/usr/local/google/home/mattrobertson/.npm/_npx/64aef35f3ba01c7c/node_modules/google-artifactregistry-auth/src/.npmrc'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/usr/local/google/home/mattrobertson/.npm/_npx/64aef35f3ba01c7c/node_modules/google-artifactregistry-auth/src/.npmrc'
}




# No worky with nodejs10

"build": yargs supports a minimum Node.js version of 12. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions

