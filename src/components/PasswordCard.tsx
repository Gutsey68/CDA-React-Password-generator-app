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
        <div className="m-auto mb-6 flex h-[60px] w-full items-center justify-between bg-black px-8 sm:w-[540px] md:h-[80px]">
            <p className="text-sm text-white md:text-2xl">{password}</p>
            <div className="flex items-center gap-4">
                {textShown && <p className="text-green">COPIED</p>}
                <Copy
                    onClick={() => {
                        clickHandler(password);
                    }}
                    className="cursor-pointer text-green hover:text-white max-md:size-4"
                />
            </div>
        </div>
    );
}
export default PasswordCard;
