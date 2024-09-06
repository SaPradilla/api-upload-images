
## API Reference

#### Save Image

```http
  POST /upload/image
```

| Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret_gm` | `string` | Secret GM (password) |


| Body (form-data)| Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imagesBuffer` | `File` | Here you can upload the images max(5) |

#### Reponse
```json
{
  "msg": "Imágenes subidas correctamente c:",
  "images": [
    "https://res.cloudinary.com/dlekrzpoh/image....",
    "https://res.cloudinary.com/dlekrzpoh/image...."
  ]
}
```

#### Errors
##### Status 401
```json
{
  "msg": "Unauthorized :("
}
```
#### When in the header the field "secret_gm" is null or incorrect 
##### Status 500
```json
{
  "msg": "Error al subir las imagenes",
  "error": "Faltan las imágenes :c sube al menos 1"
}
```
