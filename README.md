##### Feathersjs product_CRUD

 
 1. Install your dependencies

    ```
    npm install.
    ```

2. Start your app

    ```
    npm start
    ```

## referance

```
$ http://localhost:3030/users             #  for register auth >> /post method
$ http://localhost:3030/authentication    # for login auth >> /post method and then take token and put it in Bearer to can make CRUD operation for product
$ http://localhost:3030/products          # to get all products >> /get method
$ http://localhost:3030/products/id       # to get specific product >> /get method  or /patch method for updating a product or /delets method for deleteing a product
```
 


## exmple .

```
$ http://localhost:3030/users      for Register Authentication 

{
"name":"user01",
"email":"user01@gmail.com",
"password":"123456"
}
 ```
 
 
```

$ http://localhost:3030/authentication      for Login Authentication 

{
"email":"user01@gmail.com",
"password":"123456",
"stratege":"local"
}
 ```
  then take token and put it in Bearer to can make CRUD operation on product for this user and by default Feathersjs gives U number of total products and limit for eany pagination 
 
 ```

$ http://localhost:3030/products/id      for update or get or delete specific product 

{
"email":"user01@gmail.com",
"password":"123456"
}
 ```
 
 
 ```

$ http://localhost:3030/products      for get all products or create new product

{
"name":"product 01",
"price":20,
"desc":"product desc",
"image":"link product image (if U are using cloudnary or s3 storage on aws)",
"inStock":30
}
 ```
 
