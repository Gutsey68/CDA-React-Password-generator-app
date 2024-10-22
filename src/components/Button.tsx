import { ArrowRight } from 'lucide-react';
import useStrength from '../stores/useStrength';

function Button() {
    const { setPassword } = useStrength();
    return (
        <button
            onClick={setPassword}
            className="flex w-full items-center justify-center gap-2 bg-green py-4 transition-colors hover:border hover:border-green hover:bg-dark hover:text-green"
        >
            GENERATE <ArrowRight size={18} />
        </button>
    );
}
export default Button;
