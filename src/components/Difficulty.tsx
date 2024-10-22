import useStrength from '../stores/useStrength';

function Difficulty() {
    const { difficulty } = useStrength();

    switch (difficulty) {
        case 'too-week':
            return (
                <div className="flex items-center gap-0.5 md:gap-1.5">
                    <div className="h-[20px] w-[7px] bg-red md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                </div>
            );
        case 'week':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[20px] w-[7px] bg-orange md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-orange md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                </div>
            );
        case 'medium':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[20px] w-[7px] bg-yellow md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-yellow md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-yellow md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                </div>
            );
        case 'strong':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[20px] w-[7px] bg-green md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-green md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-green md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] bg-green md:h-[28px] md:w-[10px]"></div>
                </div>
            );
        default:
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                    <div className="h-[20px] w-[7px] border border-white md:h-[28px] md:w-[10px]"></div>
                </div>
            );
    }
}
export default Difficulty;
