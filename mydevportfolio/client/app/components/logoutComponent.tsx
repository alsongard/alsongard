import { redirect } from "next/dist/server/api-utils";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { LogoutAction } from "@/lib/actions";
import { useActionState } from "react";
export default function LogoutForm()
{
    const [,formAction, isPending] = useActionState(LogoutAction, undefined);
    return (
        <form 
            className="flex items-center gap-x-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 w-full"
            action={formAction}
        >
            <button type="submit" className="flex ">
                <LogOut size={20} />
                <span className="font-medium tracking-wide">{isPending ? "Logging out..." :  "Logout" }</span>
            </button>
        </form>
    )
}