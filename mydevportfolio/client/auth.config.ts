import { log } from "console";
import { request } from "http";
import next from "next";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({auth, request: {nextUrl}})
        {
            // console.log(`this is auth`);
            // log(auth);

            // console.log(`this is request:`);
            // log(request);


            const isLoggedIn = !!auth?.user; // if auth exist, check user: and if user exists: true [negate twice to get back true (true --> false --> true)]
            const isOnDashBoard = nextUrl.pathname.startsWith("/dashboard");
            // console.log(`isLogged In : ${isLoggedIn}`);
            // console.log(`isOnDashboard: ${isOnDashBoard}`);
            if (isOnDashBoard)
            {
                // console.log(`in auth.config.ts in: isOnDashBoard: ${isOnDashBoard}`);
                if (isLoggedIn) return true; // if isLoggedIn returns and exits
                return false; // otherwise false : redirected to signIn page: /login
            }
            else if (isLoggedIn) // isLoggedIn is true
            {
                // console.log(`in auth.config.ts in: isLoggedIn: ${isLoggedIn}`);
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return false;
        }
    },
    providers : [],
} satisfies NextAuthConfig;