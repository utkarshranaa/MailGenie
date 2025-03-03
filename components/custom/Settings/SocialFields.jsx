import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
function SocialFields({ label, value, options }) {
    return (
        <div>
            <label>{label}</label>
            <div className='flex gap-2'>
                <Select defaultValue={value?.icon}>
                    <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="Icons" />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option, index) => (
                            <SelectItem value={option.icon} key={index}>
                                <img src={option.icon} alt='icon'
                                    className='w-5 h-5 object-cover'
                                />
                            </SelectItem>

                        ))}

                    </SelectContent>
                </Select>
                <Input value={value?.url} />

            </div>
        </div>
    )
}

export default SocialFields