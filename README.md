##### Feathersjs product_CRUD

 
 1. Install your dependencies

    ```
    npm install
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
 


## exmple

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
"password":"123456"
}
 ```
 
