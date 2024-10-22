import useStrength from '../stores/useStrength';
import CheckBoxWithLabel from './CheckBoxWithLabel';

function CheckBoxes() {
    const { upperCase, setUpperCase, lowerCase, setLowerCase, numbers, setNumbers, symbols, setSymbols, setPassword } = useStrength();
    return (
        <div className="flex flex-col gap-2">
            <CheckBoxWithLabel
                onChange={() => {
                    setUpperCase();
                    setPassword();
                }}
                checked={upperCase}
                name="uppercase"
                text="Include Uppercase Letters"
            />
            <CheckBoxWithLabel
                onChange={() => {
                    setLowerCase();
                    setPassword();
                }}
                checked={lowerCase}
                name="lowercase"
                text="Include Lowercase Letters"
            />
            <CheckBoxWithLabel
                onChange={() => {
                    setNumbers();
                    setPassword();
                }}
                checked={numbers}
                name="numbers"
                text="Include Numbers"
            />
            <CheckBoxWithLabel
                onChange={() => {
                    setSymbols();
                    setPassword();
                }}
                checked={symbols}
                name="symbols"
                text="Include Symbols"
            />
        </div>
    );
}
export default CheckBoxes;
