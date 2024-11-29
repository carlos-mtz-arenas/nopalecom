# about

Front-end for the admin console to perform all the internal management

# features

## CRUD products

Specifics:

* Product sort of has discount prices as the difference between regular and sales prices.
* Products can be directly enabled or disabled instead of using a catalog approach.

## CRUD users

* Currently only supports `ADMIN`, `PRODUCT_MANAGER`, `SALES`

## indexing

* As the product search will work based on the products that have been created, we'll need a way to know when the index operation is close to occur as well as to force/queue it if possible

# install it

Just run `npm install`

# run it

As this is a vite template with vanilla JS, you can just `npm run dev`
