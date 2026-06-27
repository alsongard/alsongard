'use client';

interface AGProps {
    event: string,
    eventName: string,
    value: string,
    children: React.ReactNode
}
import { sendGAEvent } from "@next/third-parties/google";


export default function GAEventWrapper({event, eventName, value, children}: AGProps) {
    return (
        <div
            onClick={()=>{
                sendGAEvent(event, eventName, value)
            }}
        >
            {children}
        </div>
    )
}