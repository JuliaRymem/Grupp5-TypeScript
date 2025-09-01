// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import type { Contact } from "./contactBook"
//import { contactBook, } from "./contactBook"

const contactBook: Contact[] = []; 

function addContact(contact: Contact){
    contactBook.push(contact)
}

function removeContact(phone: string, email:string){
     const index = contactBook.findIndex(c => c.email === email && c.phone === phone)
     if (index !== -1){
    contactBook.splice(index, 1)
     }
     
}

addContact({
    type: "Private",
    address: "Storgatan 12",
    phone: "123131231",
    email: "testar@live.se"
})
addContact({
    type: "Company",
    address: "Storgatan 20",
    phone: "1231675",
    email: "testar@company.se"
})

console.log(contactBook);

removeContact("123131231", "testar@live.se")

console.log(contactBook);

contactBook.filter(c => c.type === 'Company')