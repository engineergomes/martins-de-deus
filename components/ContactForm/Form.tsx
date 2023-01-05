import React, { useState, useEffect } from "react";
import {
    useFormik,
    FormikProvider,
    Form,
    useField,
    Field,
    validateYupSchema,
} from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loading from "../Loading";
import TextInputLiveFeedback from "./TextInput";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function ContactForm() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);

    async function send(campos: any) {
        let email = campos.email;
        let subject = campos.subject;
        let phone = campos.phone;
        let cost = campos.cost;
        let message = campos.message;
        let username = campos.username;
        axios.post("/api/sendMail", {
            username,
            email,
            phone,
            subject,
            cost,
            message,
        });
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            subject: "",
            cost: "",
            message: "",
            // anexo: null,
        },

        onSubmit: async (values) => {
            setIsSubmit(true);
            await sleep(500);
            send(values);
            setIsSubmit(false);
            setIsSubmited(true);
            formik.resetForm();
        },

        validationSchema: Yup.object({
            username: Yup.string()
                // .min(2, "Must be at least 8 characters")
                // .max(20, "Must be less  than 20 characters")
                .required("É necessario preencher o seu nome")
                .matches(
                    /^[a-zA-Z0-9\s]+$/,
                    "Não pode conter caracters especiais"
                ),

            email: Yup.string()
                // .min(8, "Must be at least 8 characters")
                // .max(20, "Must be less  than 20 characters")
                .required("É necessario preencher o seu Email")
                .matches(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    "Email inválido"
                ),

            phone: Yup.string()
                // .min(8, "Must be at least 8 characters")
                // .max(20, "Must be less  than 20 characters")
                .required("É necessario preencher o seu telefone")
                .matches(/^[0-9\s]+$/, "Inserir apenas números"),
        }),
    });

    return (
        <section className="flex flex-col justify-center items-center w-full py-10 gap-10 ">
            <h1 className="text-xl font-bold text-[#d5a675] text-center  w-full">
                Deseja que entremos em contato com você? <br /> Preencha o
                formulário abaixo.
            </h1>
            <FormikProvider value={formik}>
                <Form className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-3 w-full">
                    <TextInputLiveFeedback
                        className="h-10  p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3 w-full"
                        label="Nome *"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Insira seu nome"
                    />
                    <TextInputLiveFeedback
                        className="h-10  p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3 w-full"
                        label="Email *"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Insira seu email"
                    />
                    <TextInputLiveFeedback
                        className="h-10  p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3 w-full"
                        label="Telefone *"
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Insira seu telefone"
                    />

                    <TextInputLiveFeedback
                        className="h-10  p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3 w-full"
                        label="Endereço"
                        id="cost"
                        name="cost"
                        type="text"
                        placeholder="Insira seu endereço"
                    />
                    <div className="lg:col-span-2">
                        <TextInputLiveFeedback
                            className="w-full h-10  p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3 w-full"
                            label="Assunto"
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Insira o assunto"
                        />
                    </div>

                    <div className="lg:col-span-2 flex flex-col">
                        <label htmlFor="message">Mensagem</label>

                        <Field
                            className=" min-h-[160px] h-full p-2 rounded border border-solid border-black bg-inherit resize-none overflow-auto focus:border-[#d5a675] focus:ring-[#d5a675] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
                            id="message"
                            name="message"
                            as="textarea"
                            placeholder="Digite sua mensagem aqui"
                        />
                    </div>

                    <div className="lg:col-span-2 flex flex-col  sm:w-full md:flex-row md:justify-end md:items-center relative">
                        {isSubmited ? (
                            <p className="flex font-medium  px-5 py-2 mt-5 justify-start text-center w-full">
                                Em breve retornaremos seu contato!
                            </p>
                        ) : (
                            ""
                        )}
                        <button
                            className="flex rounded bg-[#d5a675] text-white font-semibold   px-5 py-2  mt-5 justify-center items-center hover:bg-[#d8b671] transition-colors disabled:opacity-50 disabled:hover:bg-[#d5a675] min-w-[18ch]"
                            type="submit"
                            disabled={
                                formik.values != undefined
                                    ? !!formik.values.username &&
                                      !!formik.values.email
                                        ? false
                                        : true
                                    : false
                            }
                        >
                            {isSubmit ? (
                                <Loading />
                            ) : (
                                <p className="">Enviar</p>
                            )}
                        </button>
                    </div>
                </Form>
            </FormikProvider>
        </section>
    );
}
