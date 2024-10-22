type CheckBoxWithLabelProps = {
    text: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckBoxWithLabel({ text, name, checked, onChange }: CheckBoxWithLabelProps) {
    return (
        <div className="flex w-full cursor-pointer gap-4 text-white">
            <input checked={checked} onChange={onChange} type="checkbox" name={name} id={name} className="cursor-pointer accent-green" />
            <label className="cursor-pointer" htmlFor={name}>
                {text}
            </label>
        </div>
    );
}
export default CheckBoxWithLabel;
