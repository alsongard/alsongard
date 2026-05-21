"use client";

import { useState } from "react";
import { Eye, EyeOff, LogIn, User, Lock, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions";
import { useSearchParams } from "next/navigation";

/* ─── Divider ─────────────────────────────────────────────────────────────── */
const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px bg-white/[0.07]" />
    <span className="text-white/20 text-[11px] uppercase tracking-[0.15em] font-medium">{label}</span>
    <div className="flex-1 h-px bg-white/[0.07]" />
  </div>
);

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function LoginForm()
{

    const searchParams = useSearchParams();
    // console.log('this is searchParams');
    // console.log(searchParams);
    const callbackUrl = searchParams.get('callbackUrl') || ('dashboard');
    // console.log('this is callbackUrl');
    // console.log(callbackUrl);
    const [errorMessage, formAction, isPending]  = useActionState(authenticate, undefined,);

    const [form, setForm] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    

    // const handleSubmit = async () => {
    //     if (!form.username.trim() || !form.password.trim()) 
    //     {
    //         setError("Please fill in both fields.");
    //         return;
    //     }
    //     setLoading(true);
    //     // TODO: replace with your auth call e.g. signIn("credentials", { ...form })
    //     // await new Promise((r) => setTimeout(r, 1400));
    //     setLoading(false);
    //     // setError("Invalid username or password."); // uncomment to test error state
    // };

    const handleGoogle = async () => {
        setGoogleLoading(true);
        // TODO: replace with signIn("google") from next-auth
        await new Promise((r) => setTimeout(r, 1200));
        setGoogleLoading(false);
    };

    const inputBase =
        "w-full bg-white/[0.04] border rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:bg-white/[0.07]";

    return (
        <>
            {/* Keyframes */}
            <style>{`
                @keyframes fadeUp {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
                }
                .fade-up { animation: fadeUp 0.45s ease both; }
                .fade-up-1 { animation: fadeUp 0.45s 0.05s ease both; }
                .fade-up-2 { animation: fadeUp 0.45s 0.12s ease both; }
                .fade-up-3 { animation: fadeUp 0.45s 0.20s ease both; }
                .fade-up-4 { animation: fadeUp 0.45s 0.28s ease both; }
                .fade-up-5 { animation: fadeUp 0.45s 0.36s ease both; }
            `}</style>

            <form action={formAction} className="w-full max-w-[400px] mx-auto flex flex-col gap-5 px-1">

                {/* Google button */}
                <button
                    type="button"
                    onClick={handleGoogle}
                    disabled={googleLoading || loading}
                    className="fade-up flex items-center justify-center gap-3 w-full py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                    {
                        googleLoading ? (
                        <Loader2 size={16} className="animate-spin" />
                        )
                        :
                        (
                            <FcGoogle size={18} />
                        )
                    }
                    {googleLoading ? "Redirecting…" : "Continue with Google"}
                </button>

                <Divider label="or sign in with username" />

                {/* Username */}
                <div className="fade-up-2 relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
                        <User size={15} />
                    </span>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                        className={`${inputBase}`}
                        //  ${
                        // error && !form.username.trim()
                        //     ? "border-red-500/50 focus:border-red-500/70"
                        //     : "border-white/[0.08] focus:border-violet-500/50"
                        // }`}
                    />
                </div>

                {/* Password */}
                <div className="fade-up-3 relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
                        <Lock size={15} />
                    </span>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        className={`${inputBase} pr-11 `}
                        // ${
                        // error && !form.password.trim()
                        //     ? "border-red-500/50 focus:border-red-500/70"
                        //     : "border-white/[0.08] focus:border-violet-500/50"
                        // }
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                </div>
                
                <input type="hidden" name="redirectTo" value={callbackUrl}/>
                {/* Error message */}
                {
                    errorMessage || error && (
                        <p className="text-red-400/90 text-xs pl-1 -mt-2 fade-up">{error || errorMessage}</p>
                    )
                }

                {/* Submit */}
                <button 
                    type="submit"
                    disabled={loading || googleLoading}
                    className="fade-up-4 relative flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] overflow-hidden group"
                >
                {/* Shimmer on hover */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {
                    loading ? 
                    (
                        <>
                            <Loader2 size={15} className="animate-spin" />
                            Signing in…
                        </>
                    ) 
                    : 
                    (
                        <>
                            <LogIn size={15} />
                            Sign In
                        </>
                    )
                }
                </button>

            </form>
        </>
  );
}