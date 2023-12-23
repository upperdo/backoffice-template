# SvelteKit Appwrite BackOffice Template
Everything you need to build an Administration Panel Using Svelte/SvelteKit and AppWrite

## Screenshots
![Screen 1](screenshots/01.png)
![Screen 2](screenshots/02.png)
![Screen 3](screenshots/03.png)

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

## Appwrite
There's an appwrite folder in the root of the project, it contains the base functions, database and collections for the project.

there's also a bash script that can be run with ./login_appwrite.sh, it will promp to login to appwrite instance that you spesify in the .env, see .env.example


## Folder Structure
The project is well organized into the following folder structure, and use route grouping.

### Routes
- (auth) Here you will find a group of route with the auth layout ( Public route )
- (backoffice) Here you will find the admin panel ( Protected route )

### Lib
- app Here you will find your common app, config, constants, stores, utils, types, ui components and ui common widgets
- data-access Here you will find your DTO's and Data Definitions
- entities Here you will find your entites that are in your database
- features Here you will find your application features
- infraestructure Here you will find your Depdency Injection container, and everything related to infraestructure ( AppWrite interface )
- use-cases Here you will find your Application Use Cases (Business Logic / Controllers)

## Tech Stack
- SvelteKit
- Svelte
- TailwindCSS
- ShadCN-Svelte
- AppWrite

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
