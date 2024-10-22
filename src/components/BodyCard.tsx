import useStrength from '../stores/useStrength';
import Button from './Button';
import CheckBoxes from './CheckBoxes';
import RangeInput from './RangeInput';
import StrengthBar from './StrengthBar';

function BodyCard() {
    const { characterLength } = useStrength();
    return (
        <div className="flex w-[540px] flex-col  gap-6 bg-black p-8">
            <div className="flex items-center justify-between bg-black">
                <p className="font-semibold text-white">Character Length</p>
                <p className="text-2xl text-green">{characterLength}</p>
            </div>
            <RangeInput />
            <CheckBoxes />
            <StrengthBar />
            <Button />
        </div>
    );
}
export default BodyCard;
