import React from 'react';
import useStrength from '../stores/useStrength';

function RangeInput() {
    const { characterLength, setCharacterLength, setPassword } = useStrength();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLength(Number(event.target.value));
        setPassword();
    };

    const characterLengthValue = (characterLength / 20) * 100;

    return (
        <input
            id="custom-range"
            type="range"
            value={characterLength}
            onChange={handleChange}
            className="h-2 w-full cursor-pointer appearance-none accent-white"
            style={{
                background: `linear-gradient(to right, #A4FFAF ${characterLengthValue}%, #18171F ${characterLengthValue}%)`
            }}
            min="0"
            max="20"
        />
    );
}

export default RangeInput;
