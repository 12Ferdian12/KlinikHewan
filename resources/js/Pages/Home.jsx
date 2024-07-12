import Card from "@/Components/card";
import { H2 } from "@/Components/typography";

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <Card>
                    <H2>Login</H2>
                </Card>
            </div>
        </div>
    );
}