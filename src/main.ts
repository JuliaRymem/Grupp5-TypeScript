// Necessary imports and type definitions 
import type { Contact } from "./contactBook"
import { contactBook, } from "./contactBook"

// Example contacts 
const app = document.getElementById("app")!;

// Dynamic select for filtering 
const filterSelect = document.createElement("select");
const allOption = document.createElement("option");
allOption.value = "";
allOption.textContent = "Alla";
filterSelect.appendChild(allOption);

// Add options for "Private" and "Company"
["Private", "Company"].forEach(type => {
const option = document.createElement("option");
option.value = type;
option.textContent = type;
filterSelect.appendChild(option);
});

// Add select in the app (or another container)
app.appendChild(filterSelect);

// Function to render the list
function renderList(filteredContacts: Contact[]) {
  // Clear earlier list
  const existingUl = document.getElementById("contactList");
  if (existingUl) existingUl.remove();
    // Create a new list
  const ul = document.createElement("ul");
  ul.id = "contactList";
    // Populate the list with filtered contacts
  filteredContacts.forEach(c => {
    const li = document.createElement("li");
li.textContent = `${c.type} - ${c.address} - ${c.phone} ${c.email ? "- " + c.email : ""}`;
    ul.appendChild(li);
  });
  // Append the list to the app (or another container)
  app.appendChild(ul);
}

// Show the whole list first
renderList(contactBook);

// Event listener to select for filtering
filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;
  const filtered = selected
    ? contactBook.filter(c => c.type === selected)
    : contactBook;
  // Render the filtered list 
  renderList(filtered);
});

