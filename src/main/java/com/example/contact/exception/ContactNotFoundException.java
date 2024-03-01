package com.example.contact.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ContactNotFoundException extends RuntimeException{
    public ContactNotFoundException(Long id) {
        super("Contact ID " + id + " not found.");
    }

    public ContactNotFoundException() {
        super("No contacts found.");
    }

    public ContactNotFoundException(String name) {
        super("Contact Name " + name + " not found.");
    }
}
