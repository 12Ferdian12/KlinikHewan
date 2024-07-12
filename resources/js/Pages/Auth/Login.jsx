import Card from "@/Components/card";
import { H2, P, H4 } from "@/Components/typography";
import TextInput from "@/components/textInput";
import Button from "@/components/Button";
export default function Login() {
    return (
        <div className="container mx-auto">
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
                />
                <TextInput
                    label={"Password"}
                    className={"mt-3"}
                    inputSize={"sm"}
                    full={"true"}
                    type={"password"}
                    required={true}
                />
                <Button className={"mt-3"} buttonType={"primary"} full={true}>
                    <H4>Login</H4>
                </Button>
            </Card>
        </div>
    );
}
