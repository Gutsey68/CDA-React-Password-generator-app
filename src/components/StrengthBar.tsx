import useStrength from '../stores/useStrength';
import Difficulty from './Difficulty';

function StrengthBar() {
    const { difficulty } = useStrength();

    return (
        <div className="flex items-center justify-between bg-dark p-4">
            <p className="text-gray max-md:text-xs">STRENGTH</p>
            <div className="flex items-center justify-center gap-3">
                <p className="text-xs uppercase text-white md:text-xl">{difficulty}</p>
                <Difficulty />
            </div>
        </div>
    );
}
export default StrengthBar;
