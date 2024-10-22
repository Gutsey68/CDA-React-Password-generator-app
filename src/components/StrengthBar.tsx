import useStrength from '../stores/useStrength';
import Difficulty from './Difficulty';

function StrengthBar() {
    const { difficulty } = useStrength();

    return (
        <div className="flex items-center justify-between bg-dark p-4">
            <p className="text-gray">STRENGTH</p>
            <div className="flex items-center justify-center gap-3">
                <p className="text-xl uppercase text-white">{difficulty}</p>
                <Difficulty />
            </div>
        </div>
    );
}
export default StrengthBar;
