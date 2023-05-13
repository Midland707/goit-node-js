const fs = require("fs").promises;
const { nanoid } = require("nanoid");

const path = require("path");
const contactsPath = path.resolve("models", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId) || null;
  return contact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const contact = data.find((contact) => contact.id === contactId) || null;
  if (!contact) return contact;
  const resultArr = data.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(resultArr, null, 2));
  return contact;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const contact = { id: nanoid(), ...data };
  await fs.writeFile(
    contactsPath,
    JSON.stringify([...contacts, contact], null, 2)
  );
  return contact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
