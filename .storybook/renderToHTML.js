import { renderToStaticMarkup } from 'react-dom/server'
const AllHtmlEntities = require('html-entities').AllHtmlEntities
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
const entities = new AllHtmlEntities()

export default (story) =>
  prettier.format(entities.decode(renderToStaticMarkup(story())), {
    parser: 'html',
    plugins: [HTMLParser],
  })