import useStrength from '../stores/useStrength';

function Difficulty() {
    const { difficulty } = useStrength();

    switch (difficulty) {
        case 'too-week':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[28px] w-[10px] bg-red"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                </div>
            );
        case 'week':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[28px] w-[10px] bg-orange"></div>
                    <div className="h-[28px] w-[10px] bg-orange"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                </div>
            );
        case 'medium':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[28px] w-[10px] bg-yellow"></div>
                    <div className="h-[28px] w-[10px] bg-yellow"></div>
                    <div className="h-[28px] w-[10px] bg-yellow"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                </div>
            );
        case 'strong':
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[28px] w-[10px] bg-green"></div>
                    <div className="h-[28px] w-[10px] bg-green"></div>
                    <div className="h-[28px] w-[10px] bg-green"></div>
                    <div className="h-[28px] w-[10px] bg-green"></div>
                </div>
            );
        default:
            return (
                <div className="flex items-center gap-1.5">
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                    <div className="h-[28px] w-[10px] border border-white"></div>
                </div>
            );
    }
}
export default Difficulty;
