# Final Project template

This project consists of a NuxtJS implementation of a city guide website. In particular it is about the city of Milan.

**Running Link:** [here](https://hypermedia-project-2022.herokuapp.com/)

## The Team

**Group name**: HyPSS
**Members**:

- [Stefano Civelli](https://github.com/Stefano-Civelli)
- [Pietro Bernardelle](https://github.com/PietroBernardelle)
- [Samuele Cannilla](https://github.com/scannilla)
- [Stefano D'Errico](https://github.com/stefanoderr)

## Running the server

```bash
# install dependencies
$ npm install

# serve locally at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

For more details check out the [nuxt documentation](https://nuxtjs.org).

## Contribution

| member             | Front-end | DB structure and Data | API |
| ------------------ | --------- | --------------------- | --- |
| Stefano Civelli    |           |                       |     |
| Pietro Bernardelle |           |                       |     |
| Samuele Cannilla   |           |                       |     |
| Stefano D'Errico   |           |                       |     |

## Back-end details

Back-end is implemented in NodeJS which comes included with the Nuxt framework.

#### `API`

All APIs are implemented using the **Axios** HTTP client. This module comes already integrated with Nuxt and allows us to easily create REST APIs to allow us the fetching of DB resources from the front-end.

#### `Rendering mode`

As rendering mode we of course chose **Server-side rendering** (SSR). Server-side sends a fully rendered page to the client. This enables the Google crawler to analyze our page and therefore obtain an high SEO rating.

## Front-end implementation details

#### `Components`

Most pages are built by assembling components toghether (see Design document commented wireframes for more details). This approach promotes code reusability and better organization, resulting in easier mantainance.

#### `Styling`

Styling is done both with standard CSS and by using **Bootstrap** built-in classes (especially for responsive complex layouts like grids and flexbox).
All component-related styling is in the `<style>` tag, Global styles instead are in a CSS file in the assets folder like suggested in Nuxt best practices.

#### `Images`

Images are mostly loaded from the project server itself (with some exceptions) for SEO purposes. The remaining very big ones are hosted on imgur.

#### `Routing`

Routing is exclusively implemented with Nuxt-Links like indicated in the Nuxt official documentation: _"The `<NuxtLink>` component should be used for all internal links."_

## Deployment

Project has been deployed on the **Heroku** hosting platform and is available at [this link](https://hypermedia-project-2022.herokuapp.com/)

## DB Design

Below is the ER diagram we designed

![ER-diagram](https://user-images.githubusercontent.com/62955439/177054688-89f25397-b188-4bfb-bf31-f2c5f99c0b58.jpg)

## Best practices and Framework Functionalities

Most of the functionalities/best practices provided by the Nuxt framework have been used.
For example Layouts (also the built in functionality for the error page management), dynamic pages, components, Nuxt-Links.

We used most of the dedicated directories provided by Nuxt:

- `assets`
- `components`
- `layouts`
- `pages`
- `static`
