define({ "api": [
  {
    "type": "get",
    "url": "/signin",
    "title": "Singin",
    "group": "Sistema",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Logado!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app.ts",
    "groupTitle": "Sistema",
    "name": "GetSignin"
  }
] });
