import { Copy } from 'lucide-react';
import { useState } from 'react';
import useStrength from '../stores/useStrength';

function PasswordCard() {
    const [textShown, setTextShown] = useState(false);
    const { password } = useStrength();

    const clickHandler = (password: string) => {
        navigator.clipboard.writeText(password).then(() => {
            setTextShown(true);
            setTimeout(() => {
                setTextShown(false);
            }, 1000);
        });
    };

    return (
        <div className="mb-6 flex h-[80px] w-[540px] items-center justify-between bg-black px-8">
            <p className="text-2xl text-white">{password}</p>
            <div className="flex items-center gap-4">
                {textShown && <p className="text-green">COPIED</p>}
                <Copy
                    onClick={() => {
                        clickHandler(password);
                    }}
                    className="cursor-pointer text-green hover:text-white"
                />
            </div>
        </div>
    );
}
export default PasswordCard;
