interface InputBoxProps {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;     
}

export function InputBox({label, placeholder, onChange}: InputBoxProps) {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-2 border rounded border-slate-200"/>
    </div>
}