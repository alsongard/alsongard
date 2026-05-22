import LoginForm from "@/app/components/loginComponent";
import { Suspense } from "react";
export default function SignIn()
{

    return (
        <div className="mt-[100px]">
            <Suspense fallback={<>....</>}>
                <LoginForm/>
            </Suspense>
        </div>
    )
}

