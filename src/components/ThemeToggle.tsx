"use client"
import {FC} from 'react'
import {useTheme} from 'next-themes'
import {DropdownMenu} from "@/ui/DropdownMenu"

interface ThemeToggleProps {
}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
    const {setTheme} = useTheme()
    return <DropdownMenu></DropdownMenu>
}
export default ThemeToggle