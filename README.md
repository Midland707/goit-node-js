REST API

CONTACTS
@ GET /api/contacts
Authorization: "Bearer {{token}}".
нічого не отримує
викликає функцію listContacts для роботи з json-файлом contacts.json
повертає масив всіх контактів в json-форматі зі статусом 200

@ GET /api/contacts/:id
Authorization: "Bearer {{token}}".
Не отримує body
Отримує параметр id
викликає функцію getById для роботи з json-файлом contacts.json
якщо такий id є, повертає об'єкт контакту в json-форматі зі статусом 200
якщо такого id немає, повертає json з ключем "message": "Not found" і статусом 404

@ POST /api/contacts
Authorization: "Bearer {{token}}".
Отримує body в форматі {name, email, phone} (усі поля обов'язкові)
Якщо в body немає якихось обов'язкових полів, повертає json з ключем {"message": "missing required name field"} і статусом 400
Якщо з body все добре, додає унікальний ідентифікатор в об'єкт контакту
Викликає функцію addContact(body) для збереження контакту в файлі contacts.json
За результатом роботи функції повертає об'єкт з доданим id {id, name, email, phone} і статусом 201

@ DELETE /api/contacts/:id
Authorization: "Bearer {{token}}".
Не отримує body
Отримує параметр id
Викликає функцію removeContact для роботи з json-файлом contacts.json
якщо такий id є, повертає json формату {"message": "contact deleted"} і статусом 200
якщо такого id немає, повертає json з ключем "message": "Not found" і статусом 404

@ PUT /api/contacts/:id
Authorization: "Bearer {{token}}".
Отримує параметр id
Отримує body в json-форматі c оновленням будь-яких полів name, email и phone
Якщо body немає, повертає json з ключем {"message": "missing fields"} і статусом 400
Якщо з body всі добре, викликає функцію updateContact(contactId, body). (Напиши її) для поновлення контакту в файлі contacts.json
За результатом роботи функції повертає оновлений об'єкт контакту і статусом 200. В іншому випадку, повертає json з ключем "message": "Not found" і статусом 404

@ PATCH / api / contacts /: contactId / favorite
Authorization: "Bearer {{token}}".
Отримує параметр contactId
Отримує body в json-форматі c оновленням поля favorite
Якщо body немає, повертає json з ключем {"message": "missing field favorite"}і статусом 400
Якщо з body все добре, викликає функцію updateStatusContact (contactId, body) (напиши її) для поновлення контакту в базі
За результатом роботи функції повертає оновлений об'єкт контакту і статусом 200. В іншому випадку, повертає json з ключем " message ":" Not found " і статусом 404

USERS
Content-Type: application/json
@ POST /users/register - Реєстрація користувача
RequestBody: {
  "email": xxxxx@example.com",
  "password": "***********"
}
Registration validation error = Status: 400 Bad Request. ResponseBody: <Помилка від Joi або іншої бібліотеки валідації>.
Registration conflict error = Status: 409 Conflict. ResponseBody: {"message": "Email in use"}.
Registration success response = Status: 201 Created
ResponseBody: {
  "user": {
    "email": "xxxxx@example.com",
    "subscription": "starter"
  }
}

@ POST /users/login - Авторизація користувача.
Registration validation error = Status: 400 Bad Request. ResponseBody: <Помилка від Joi або іншої бібліотеки валідації>.
Login auth error = Status: 401 Unauthorized. ResponseBody: {"message": "Email or password is wrong"}.
Login success response = Status: 200 OK. 
ResponseBody: {
  "token": "exampletoken",
  "user": {
    "email": "xxxxx@example.com",
    "subscription": "starter"
  }
}

@ POST /users/logout - Вихід користувача
Logout request = Authorization: "Bearer {{token}}".
Logout unauthorized error = Status: 401 Unauthorized. ResponseBody: {"message": "Not authorized"}.
Logout success response = Status: 204 No Content.

@ GET /users/current
Current user request = Authorization: "Bearer {{token}}".
Logout unauthorized error = Status: 401 Unauthorized. ResponseBody: {"message": "Not authorized"}.
Current user success response = Status: 200 OK. 
ResponseBody: {
  "email": "example@example.com",
  "subscription": "starter"
}

@ GET /contacts?page=1&limit=20 - Пагінація для колекції контактів

@ GET /contacts?favorite=true - Фільтрація контактів по полю "favorite".

@ PATCH /users - Оновлення підписки (subscription) користувача.
Підписка повинна мати одне з наступних значень ['starter', 'pro', 'business'].

@ PATCH /users/avatars - Оновлення картинки аватара користувача.
Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: завантажений файл

Status: 200 OK
ResponseBody: {
  "avatarURL": "тут буде посилання на зображення"
}

EXPRESS.STATIC
http://locahost:<порт>/avatars/<ім'я файлу з розширенням>

RUN
npm start — старт сервера в режимі production

npm run start:dev — старт сервера в режимі розробки (development)

npm run lint — запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера

npm lint:fix — та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
