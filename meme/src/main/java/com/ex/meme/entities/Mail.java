package com.ex.meme.entities;/*
package com.ex.pick.entities;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import javax.mail.Session;
import javax.mail.Transport;

public class Mail
{

    public Mail() {};

    // email ID of Recipient.
    String recipient ;

    // email ID of  Sender.
    String sender ;

    // using free gmail system. ONLY works for gmail accounts
    String host = "aspmx.l.google.com";


    public void sendEmail(String recipient, String sender ) {

        System.out.println("In the sendEmail system");

        // Getting system properties
        Properties properties = System.getProperties();

        // Setting up mail server
        properties.setProperty("mail.smtp.host", host);

        // creating session object to get properties
        Session session = Session.getDefaultInstance(properties);

        this.recipient = recipient;
        this.sender = sender;

        try{
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(sender));

            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));

            message.setSubject("Testing the e-mail system");

            message.setText("Mail system test, if you received this then we have succeeded");

            Transport.send(message);


            System.out.println("Mail successfully sent");




        }catch (MessagingException mex)
        {
            mex.printStackTrace();
        }
    }

    public void accountCreated(Employee e) {

        System.out.println("In the sendEmail system");

        // Getting system properties
        Properties properties = System.getProperties();

        // Setting up mail server
        properties.setProperty("mail.smtp.host", host);

        // creating session object to get properties
        Session session = Session.getDefaultInstance(properties);

        this.recipient = e.getEmail();
        this.sender = "af.gomez864@gmail.com";

        try{
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(sender));

            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));

            message.setSubject("Account created! Welcome " + e.getLastName() + "!");

            message.setText("Hello " + e.getLastName() + ", \n"
                + "     Your new account has been created! \n"
                + "Have a great day!");

            Transport.send(message);


            System.out.println("Mail successfully sent");

        }catch (MessagingException mex)
        {
            mex.printStackTrace();
        }

    }


}
*/
