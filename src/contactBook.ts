type Address = string
type ContactType = "Private" | "Company"

export interface  Contact {
    type:  ContactType,
    address: Address,
    phone: string | number,
    email?: string,
}

export const contactBook: Contact[] = []; 