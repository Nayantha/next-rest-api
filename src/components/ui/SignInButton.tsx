"use client"
import {FC, useState} from 'react'
import Button from "@/ui/Button";

interface SignInButtonProps {
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    return <Button></Button>
}
export default SignInButton