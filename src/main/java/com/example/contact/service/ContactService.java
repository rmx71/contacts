package com.example.contact.service;

import com.example.contact.exception.ContactNotFoundException;
import com.example.contact.model.Contact;
import com.example.contact.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContactService {

    private ContactRepository contactRepository;


    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact getContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        if (contact.isPresent()) {
            return contact.get();
        } else {
            throw new ContactNotFoundException(id);
        }
    }

    public long addContact(Contact input) {
        Contact savedContact = contactRepository.save(input);
        return savedContact.getId();
    }

}
