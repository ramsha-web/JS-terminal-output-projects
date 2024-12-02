let contacts = [];  

// Function to add a new contact
function addContact(name, phone, email) {
  // Create a new contact object
  const contact = { name: name, phone: phone, email: email };

  // Add the new contact to the contacts array
  contacts.push(contact);
  console.log(`${name} has been added to your contacts.`);
}

// Function to search contacts by name or phone
function searchContact(query) {
  // Search for contacts that match the name or phone
  const result = contacts.filter(contact => 
    contact.name.toLowerCase().includes(query.toLowerCase()) || 
    contact.phone.includes(query)
  );

  // Display search results
  if (result.length > 0) {
    console.log('Search Results:');
    result.forEach(contact => {
      console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    });
  } else {
    console.log('No contacts found.');
  }
}

// Function to update contact information
function updateContact(name, newPhone, newEmail) {
  // Find the contact by name
  const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  if (contact) {
    // Update the contact details
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log(`${name}'s contact information has been updated.`);
  } else {
    console.log(`${name} not found in your contacts.`);
  }
}

// Function to delete a contact
function deleteContact(name) {
  const index = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) {
    contacts.splice(index, 1);
    console.log(`${name} has been deleted from your contacts.`);
  } else {
    console.log(`${name} not found in your contacts.`);
  }
}


addContact('Ali', '+92-336-784390', 'ali@example.com');
addContact('Sara', '+92-331-3542722', 'sara@example.com');
searchContact('Ali');  // Search by name
updateContact('Ali', '111-222-3333', 'ali.new@example.com');  // Update Ali's info
deleteContact('sara');  // Delete sara from the contacts
searchContact('sara');  // Try searching for sara after deletion
