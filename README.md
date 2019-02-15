# Savills investis test site

I have set up a STRIPPED BACK mock version of the site without all the assets, but just as an example as to how you would want to load the header quickly effectively. Ideally you would get rid of all the unnecessary stuff, such as multiple versions of jQuery - this would require you to ensure all your dependencies on the page are capable of using the same version!

For some reason Vuture send back JSON for their header/footer markup instead of HTML. I will be pushing them to change this. However the principles in this repo can be adapted depending on how you chose to fetch the markup.

To run the repo do as follows...

- `$ npm install`
- `$ node scripts/fetchMarkup.js`
- `$ python -m SimpleHTTPServer 9999`

Then visit `http://localhost:9999/public/` in your browser.
