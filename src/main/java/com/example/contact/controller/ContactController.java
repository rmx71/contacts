package com.example.contact.controller;

import com.example.contact.model.Contact;
import com.example.contact.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ContactController {

    ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/retrieveContactDetails/{id}")
    public ResponseEntity<Contact> retrieveContactDetails(@PathVariable Long id) {
        Contact contact = contactService.getContactById(id);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PostMapping("/recordContactDetails")
    public Long recordContactDetails(@RequestBody Contact contactInput) {
        Long id = contactService.addContact(contactInput);
        return id;
    }

}
