import dotenv from 'dotenv';
dotenv.config();

import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const contact = (_req: Request, res: Response) => {
    // console.log(contact)
    res.render('contact');
};

const submit = async (req: Request, res: Response) => {
    //console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"${req.body.name}"<${req.body.email}>`, // sender address
            to: 'bar@example.com, baz@example.com',
            subject: 'Formulario de contacto', // Subject line
            text: req.body.message, // Plain-text version of the message
            html: `<pre>${req.body.message}</pre>`, // HTML version of the message
        });

        console.info(info);
    } catch (error) {
        console.error('Error: ', error);
    }

    res.send('Enviando formulario de contacto');
};

const controller = {
    contact,
    submit,
};

export default controller;
