# SvelteKit Appwrite BackOffice Template

Everything you need to build an Administration Panel Using Svelte/SvelteKit and AppWrite

## Development

If you want to begin the development process, follow this guide.

```bash
# create a new project in the current directory
git clone repo

# cd into directory
cd project-name/

# install dependencies
pnpm i

# create new env file and update the variables
copy .env.example .env

# run the project
pnpm dev
```

## Aliases
To have a better project structure in the imports of the files, we have added the following alias.

- $lib - Default points to src/lib/
- $assets - Here we will have access to our assets paths, public files
- $stores - Here we will have our stores
- $features - Here are going to be the features of the application, components with business logic
- $ui - Everything related to ui, widgets, layout etc.
- $common - Here we will have all common functionality such as utils functions, constants etc.

## Tech Stack

- SvelteKit
- Svelte
- TailwindCSS
- ShadCN-Svelte
- AppWrite
- 

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
