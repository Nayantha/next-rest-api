"use client"
import {FC, useState} from 'react'
import Button from "@/ui/Button";
import {signOut} from "next-auth/react";
import toast from "react-hot-toast";

interface SignOutButtonProps {
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const signOutWithGoogle = async () => {
        setLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                key: undefined,
                props: undefined,
                type: "error",
                title: "Error Signing out",
                message: "Please try again later."
            })
        }
    }

    return <Button onClick={signOutWithGoogle} isLoading={isLoading}>Sign out</Button>
}
export default SignOutButton