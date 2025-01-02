import Card from "@/Components/card";
import { H2, P, H4 } from "@/Components/typography";
import TextInput from "@/components/textInput";
import Button from "@/components/Button";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrfTokenElement = document.querySelector(
            'meta[name="csrf-token"]'
        );
        if (!csrfTokenElement) {
            alert("CSRF token not found");
            return;
        }

        const csrfToken = csrfTokenElement.getAttribute("content");

        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            Inertia.visit("/home");
        } else {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto">
            <Card
                className={
                    "bg-stone-600 mx-auto sm:w-96 px-4 py-6 rounded-lg w-full sm:shadow-md sm:rounded-xl sm:mt-24"
                }
            >
                <div className="text-center">
                    <H2>Login Page</H2>
                </div>

                <TextInput
                    label={"Email"}
                    className={"mt-3"}
                    inputSize={"sm"}
                    full={"true"}
                    type={"text"}
                    required={true}
                    value={values.email}
                    id={"email"}
                    onChange={handleChange}
                />
                <TextInput
                    label={"Password"}
                    className={"mt-3"}
                    inputSize={"sm"}
                    full={"true"}
                    type={"password"}
                    required={true}
                    value={values.password}
                    id={"password"}
                    onChange={handleChange}
                />
                <Button className={"mt-3"} buttonType={"primary"} full={true}>
                    <H4>Login</H4>
                </Button>
            </Card>
        </form>
    );
}
