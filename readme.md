# Kopeechka

**its A Kopeechka.store API Wrapper**

## Installatiom

You can use the following command to add the library to your project: 

```shell
npm install kopeechka
```

## Usage

**ApiKey Connection**

```js
import { KopeechkaClass } from 'kopeechka';
//or
const { KopeechkaClass } = require("kopeechka")
const api = new KopeechkaClass("1234567890", "2.0");
```

**Request Email**

```js
  const d = await api.getEmailRequest({
    site: "github.com",
    mailType: "outlook"
  })
  console.log(d)
```

**Get Email Response**

```js
      const getResponseEmail = await api.recieveEmail({ 
        taskID: "1234567890"
      })
      
  console.log(getResponseEmail)
```