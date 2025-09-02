type Address = string
type ContactType = "Private" | "Company"

export interface  Contact {
    name?: string,
    type:  ContactType,
    address: Address,
    phone: string | number,
    email?: string,
}

export const contactBook: Contact[] = [];  

export function addContact(contact: Contact){
    contactBook.push(contact)
}

export function removeContact(phone: string, email:string){
     const index = contactBook.findIndex(c => c.email === email && c.phone === phone)
     if (index !== -1){
    contactBook.splice(index, 1)
     }
     
}

export function updateContact(updatedContact: Contact){
    const index = contactBook.findIndex(c => c.email === updatedContact.email && c.phone === updatedContact.phone)  
    if (index !== -1){
        contactBook[index] = updatedContact
    }   
}   

export function listContacts(): Contact[]{
    return contactBook
}   

export function findContactByName(name: string): Contact | undefined {
    return contactBook.find(c => c.address === name)
}   


// --- Example usage ---
addContact({
    type: "Private",
    address: "Main Street 1",
    phone: "0701234567",
    email: "anna@example.com",
    name: "Anna Andersson"
})

addContact({
    type: "Company",
    address: "Business Road 42",
    phone: "0109876543",
    email: "info@firma.se",
    name: "Företag AB"
})

console.log(contactBook)