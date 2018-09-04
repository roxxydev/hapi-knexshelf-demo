# Example of hapijs usage of knexshelf

The following REST API is a basic usage of knexshelf hapi plugin CRUD transactions.

Creating a brand name
---
<b>POST _/brand/create_<b>

Parameters
- name (string, required) - Brand name to create.

Response
- **200 OK** - Brand name created.
```$xslt
{ "id":1, "name":"Apple" }
```
- **400 Bad Request** 

##### Example
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "Apple"}' http://localhost:8088/brand/create
```

Renaming brand
---
<b>POST _/brand/rename_<b>

Parameters
- id (number, required) - The id of brand to rename.
- name (string, old) - Brand name to create.

Response
- **200 OK** - Brand name renamed.
```$xslt
{ "id":1, "name":"Samsung" }
```
- **400 Bad Request** 

##### Example
```
curl -X POST -H "Content-Type: application/json" -d '{"id": 1,"name": "Samsung"}' http://localhost:8088/brand/rename
```

List brands
---
<b>GET _/brand/list_<b>

Parameters
- name (string, old) - Brand name to list.

Response
- **200 OK**
```$xslt
[{"id":"2","created_at":"2018-08-31T05:48:53.312Z","name":"Apple"}]
```
- **400 Bad Request** 

##### Example
```
curl -X GET -H "Content-Type: application/json" http://localhost:8088/brand/list?name=Apple
```

Delete brand
---
<b>DELETE _/brand/delete/{id}_<b>

Parameters
- id (number, required) - The id of brand to delete.

Response
- **204**
- **400 Bad Request** 

##### Example
```
curl -X DELETE http://localhost:8088/brand/delete/1
```
