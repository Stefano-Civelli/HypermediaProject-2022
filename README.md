# Final Project template

This project consists of a NuxtJS implementation of a city guide website. In particular it is about the city of Milan.

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

| member    | Front-end | DB structure and Data | API |
| --------- | --------- | --------------------- | --- |
| Ste       |           |                       |     |
| Pie       |           |                       |     |
| Samu      |           |                       |     |
| Ste d'err |           |                       |     |

## API

All APIs are implemented using the **Axios** HTTP client. This module comes already integrated with Nuxt and allows us to easily create REST APIs to allow us the fetching of DB resources from the front-end.

## Front-end implementation details

#### `Components`

Most pages are built by assembling components toghether (see Design document commented wireframes for more details). This approach promotes code reusability and better organization, resulting in easier mantainance.

#### `Styling`

Styling is done both with standard CSS and by using **Bootstrap** built-in classes (especially for responsive complex layouts like grids and flexbox).

#### `Images`

Images are mostly loaded from the project server itself (with some exceptions) for SEO purposes

#### `Routing`

Routing is exclusively implemented with Nuxt-Links like indicated in the Nuxt official documentation: _"The `<NuxtLink>` component should be used for all internal links."_

## DB Design

Below is the ER diagram we designed

**_put here ER DIAGRAM_**

## Best practices and Framework Functionalities

Most of the framework functionalities have been used like for example Layouts (also the built in functionality for the error page management), dynamic pages, components, Nuxt-Links.

We used most of the special directories

### `assets`

### `components`

### `layouts`

### `pages`

### `static`
