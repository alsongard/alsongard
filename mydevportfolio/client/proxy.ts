import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
    // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
    matcher: ['/((?!api|_next/static|about|project|cybersec|contact|projects|seed|_next/image|.*\\.png$|$).*)'],
};