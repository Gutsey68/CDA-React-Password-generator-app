import { create } from 'zustand';

type Store = {
    difficulty: 'too-week' | 'week' | 'medium' | 'strong';
    changeDifficulty: () => void;
    characterLength: number;
    setCharacterLength: (length: number) => void;
    password: string;
    setPassword: () => void;
    upperCase: boolean;
    setUpperCase: () => void;
    lowerCase: boolean;
    setLowerCase: () => void;
    numbers: boolean;
    setNumbers: () => void;
    symbols: boolean;
    setSymbols: () => void;
};

const useStrength = create<Store>(set => ({
    difficulty: 'too-week',
    changeDifficulty: () => {
        const state = useStrength.getState();
        let score = 0;
        if (state.upperCase) score += 1;
        if (state.lowerCase) score += 1;
        if (state.numbers) score += 1;
        if (state.symbols) score += 1;
        if (state.characterLength >= 8) score += 1;
        if (state.characterLength >= 12) score += 1;
        let difficulty: 'too-week' | 'week' | 'medium' | 'strong' = 'too-week';
        if (score >= 5) {
            difficulty = 'strong';
        } else if (score >= 4) {
            difficulty = 'medium';
        } else if (score >= 3) {
            difficulty = 'week';
        }
        set({ difficulty });
    },
    characterLength: 0,
    setCharacterLength: (length: number) => set({ characterLength: Math.max(0, Math.min(20, length)) }),
    password: '',
    setPassword: () => {
        const state = useStrength.getState();
        const numbers = '0123456789';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const symbols = '!@#$%^&*';
        let characters = '';
        let newPassword = '';

        const selectedTypes = [];
        if (state.upperCase) {
            characters += upperCase;
            selectedTypes.push(upperCase);
        }
        if (state.lowerCase) {
            characters += lowerCase;
            selectedTypes.push(lowerCase);
        }
        if (state.numbers) {
            characters += numbers;
            selectedTypes.push(numbers);
        }
        if (state.symbols) {
            characters += symbols;
            selectedTypes.push(symbols);
        }

        // Ensure at least one character of each selected type
        if (state.characterLength >= selectedTypes.length) {
            selectedTypes.forEach(type => {
                newPassword += type.charAt(Math.floor(Math.random() * type.length));
            });
        }

        // Fill the rest of the password length with random characters
        for (let i = newPassword.length; i < state.characterLength; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // Shuffle the password to ensure randomness
        newPassword = newPassword
            .split('')
            .sort(() => 0.5 - Math.random())
            .join('');

        state.changeDifficulty();
        set({ password: newPassword });
    },
    upperCase: false,
    setUpperCase: () => set({ upperCase: !useStrength.getState().upperCase }),
    lowerCase: false,
    setLowerCase: () => set({ lowerCase: !useStrength.getState().lowerCase }),
    numbers: false,
    setNumbers: () => set({ numbers: !useStrength.getState().numbers }),
    symbols: false,
    setSymbols: () => set({ symbols: !useStrength.getState().symbols })
}));

export default useStrength;
