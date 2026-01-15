import { useStore } from '../../store/useStore';
import StatCard from './StatCard';

const colors = {
    amber: 'bg-amber-400',
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400',
};

const StatsBoard = () => {
    const enteredText = useStore((state) => state.enteredText);
    const totalCharacters = useStore((state) => state.totalCharacters);
    const setTotalCharacters = useStore((state) => state.setTotalCharacters);
    const setCleanEnteredText = useStore((state) => state.setCleanEnteredText);

    const cleanLength = enteredText.replace(/\s+/g, '').length;
    setTotalCharacters(cleanLength);
    setCleanEnteredText(enteredText.replace(/\s+/g, ''));

    const wordsCount = (enteredText.match(/[\p{L}0-9_]+/gu) || []).length;
    const sentencesCount = enteredText
        .split(/[.!?]+/)
        .filter((segment) => /\w/.test(segment)).length;

    return (
        <>
            <div className="flex justify-between">
                <StatCard
                    label="Total Characters"
                    value={totalCharacters}
                    color={colors.amber}
                />
                <StatCard
                    label="Words Count"
                    value={wordsCount}
                    color={colors.indigo}
                />
                <StatCard
                    label="Sentences Count"
                    value={sentencesCount}
                    color={colors.emerald}
                />
            </div>
        </>
    );
};

export default StatsBoard;
