// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import type { Contact } from "./contactBook"
import { contactBook, } from "./contactBook"

function addContact(contact: Contact){
    contactBook.push(contact)
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

contactBook.filter((c) => c.type === 'Company')