// Custom types for addresses and contacts
type Address = string
type ContactType = "Private" | "Company"

// Contact interface definition 
export interface  Contact {
    type:  ContactType,
    address: Address,
    phone: string | number,
    email?: string,
}

// Contact-book array to store contacts
export const contactBook: Contact[] = []; 

// Function to add a new contact to the contact book 
function addContact(contact: Contact){
    contactBook.push(contact)
}

// Adding some examples for contacts
addContact({
    type: "Private",
    address: "123 Maple Street",
    phone: "555-1234",
    email: "john.doe@example.com"
});

addContact({
    type: "Private",
    address: "456 Oak Avenue",
    phone: "555-5678",
    email: "jane.smith@example.com"
});

addContact({
    type: "Company",
    address: "789 Pine Road",
    phone: "555-9012",
    email: "acme.corp@example.com"
});

addContact({
    type: "Company",
    address: "321 Elm Street",
    phone: "555-3456",
    email: "globex@example.com"
});