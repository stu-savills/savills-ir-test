const fetch = require('node-fetch');
const fs = require('fs');

async function fetchMarkup(name) {
  const response = await fetch(`https://www.savills.com/header-footer/${name}.aspx`);
  const markup = await response.text();

  fs.writeFileSync(`public/views/${name}.html`, markup, 'utf8');
  console.log(`${name} file written`);
}

(async function() {
  try {
    await fetchMarkup('header');
    await fetchMarkup('footer');
  } catch (error) {
    console.log('error executing: ', error);
  }
  process.exit();
}());
