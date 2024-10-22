import useStrength from '../stores/useStrength';
import Button from './Button';
import CheckBoxes from './CheckBoxes';
import RangeInput from './RangeInput';
import StrengthBar from './StrengthBar';

function BodyCard() {
    const { characterLength } = useStrength();
    return (
        <div className="m-auto flex w-[96%] flex-col  gap-6 bg-black p-8 sm:w-[540px]">
            <div className="flex items-center justify-between bg-black">
                <p className="font-semibold text-white">Character Length</p>
                <p className="text-green sm:text-2xl">{characterLength}</p>
            </div>
            <RangeInput />
            <CheckBoxes />
            <StrengthBar />
            <Button />
        </div>
    );
}
export default BodyCard;
