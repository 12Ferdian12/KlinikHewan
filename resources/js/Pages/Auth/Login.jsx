import Card from "@/Components/card";
import { H2, P, H4 } from "@/Components/typography";
import TextInput from "@/components/textInput";
import Button from "@/components/Button";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        console.log("key : ", key);
        console.log("value : ", value);

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/login", values);
    }
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
                    label={"Username"}
                    className={"mt-3"}
                    inputSize={"sm"}
                    full={"true"}
                    type={"text"}
                    required={true}
                    value={values.username}
                    id={"username"}
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
