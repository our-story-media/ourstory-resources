# Resources

Branding, documentation and printable based resources for using Indaba.

## Documentation

These docs are based on https://vuepress.vuejs.org.

Setup Editing:

`npm install -g vuepress`

`npm install i`

To preview changes on you machine:

`npm run docs:dev`

Edit files in the `doc_gen` folder.

To deploy to live site:

`npm run docs:build && git commit -am"docs update" && git push`

## Translation

To update the machine translation, run `doc_gen\.vuepress\translate npm start`. Only source files that *do not* exist in the output dirs will be translated.