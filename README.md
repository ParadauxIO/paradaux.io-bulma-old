# paradaux.io

Personal website of Rían Errity
Written using [Bulma](https://bulma.io) CSS with a modified version of [particles.js](https://vincentgarreau.com/particles.js/)

Hosted on cloudflare using workers, via cloudflare/wrangler

## Live example

develop: https://paradaux_site.paradaux.workers.dev <br>
main: https://paradaux.io

## Copying this website to use yourself.

Feel free! Just know there's a few things you'll need to be familiar with in order to use this, namely cloudflare workers and SASS. 

Clone the repository, and update wrangler.toml with your account id and zone id for the particular domain you intend to host it on as per the [configuration documentation](https://developers.cloudflare.com/workers/cli-wrangler/configuration). At that point it's just a matter of using `$ wrangler dev` to host a local development copy of the webserver (assuming you have wrangler added to $PATH) 

Publishing is as easy as `wrangler publish` provided you have it configured correctly, or you could use a github action like I am. 

## SASS

This project makes use of SASS in order to customize elements of bulma. In order to modify the SASS stylesheet / colorscheme you will need to run 

```bash
$ npm i # Installs the necessary packages to compile SASS (as defined in package.json)
$ npm run css-build # Compiles sass/paradaux-bulma.scss and outputs it to css/paradaux-bulma.css

# OR
$ npm start # This enables a daemon which re-compiles the SASS with every file change.
```

## License

This project is available under the Creative Commons Zero 1.0 license, See LICENSE.md for more information.
