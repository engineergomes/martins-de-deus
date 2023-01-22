import type { NextApiRequest, NextApiResponse } from "next";

const sendGridMail = require("@sendgrid/mail");

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { email, username, phone, subject, cost, message } = request.body;

    const msg = {
        to: "contato@contato@martinsdedeus.com.br",
        from: "eng.rsgomes2@gmail.com",
        subject: `Novo contato: ${username}`,
        text: `Email: ${email}\n\nNome: ${username}\n\nTelefone: ${phone}\n\nAssunto: ${subject}\n\nFatura: ${cost}\n\nMensagem: ${message}`,
    };

    try {
        await sendGridMail.send(msg);
        console.log("ok");
        response.send("Email sent successfully");
    } catch (error: any) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
        response.status(500).json("Failed to send email");
    }
};
