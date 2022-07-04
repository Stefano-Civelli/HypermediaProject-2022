# Final Project template

This project consists of a NuxtJS implementation of a city guide website. In particular it is about the city of Milan.

**Running Link:** [here](https://hypermedia-project-2022.herokuapp.com/)

<br>

## The Team

**Group name**: HyPSS
**Members**:

- [Stefano Civelli](https://github.com/Stefano-Civelli)
- [Pietro Bernardelle](https://github.com/PietroBernardelle)
- [Samuele Cannilla](https://github.com/scannilla)
- [Stefano D'Errico](https://github.com/stefanoderr)

<br>

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

<br>

## Contribution

**NOTE**: what is indicated in the table are the main tasks but **not the only ones** managed by each member

| member             | Tasks                                             |
| ------------------ | ------------------------------------------------- |
| Stefano Civelli    | Front implementation, DB design, SEO optimization |
| Pietro Bernardelle | Front implementation, DB design, APIs             |
| Samuele Cannilla   | DB design, DB content, MAP API                    |
| Stefano D'Errico   | Front implementation, DB design                   |

<br>

## General architecture

Application is structured following the **MVC design pattern**: separating _data_ from _rapresentation_ and connecting the 2 aspects with the controller that queries the data and updates the view.
The _view_ being the _Front-end_ and _model and controller_ being the _Back-end_.

![#-Tier_architecture](https://user-images.githubusercontent.com/62955439/177119309-c592270f-1a60-4a84-aa60-0cbce1cfc61c.jpg)

<br>

## Back-end details

Back-end is implemented in NodeJS which comes included with the Nuxt framework.

#### `API`

All APIs are implemented using the **Axios** HTTP client. This module comes already integrated with Nuxt and allows us to easily create REST APIs to allow us the fetching of DB resources from the front-end.

#### `Rendering mode`

As rendering mode we of course chose **Server-side rendering** (SSR). Server-side sends a fully rendered page to the client. This enables the Google crawler to analyze our page and therefore obtain an high SEO rating.

<br>

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

<br>

## Deployment

Project has been deployed on the **Heroku** hosting platform and is available at [this link](https://hypermedia-project-2022.herokuapp.com/)

<br>

## DB Design

Below is the ER diagram we designed

![ER-diagram](https://user-images.githubusercontent.com/62955439/177054688-89f25397-b188-4bfb-bf31-f2c5f99c0b58.jpg)

<br>

## Best practices and Framework Functionalities

Most of the functionalities/best practices provided by the Nuxt framework have been used.
For example Layouts (also the built in functionality for the error page management), dynamic pages, components, Nuxt-Links.

We used most of the dedicated directories provided by Nuxt:

- `assets`
- `components`
- `layouts`
- `pages`
- `static`


