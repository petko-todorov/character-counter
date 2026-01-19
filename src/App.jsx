import ApproximateReadingTime from './components/ApproximateReadingTime';
import Header from './components/Header';
import IncludeSpaces from './components/IncludeSpaces';
import LetterDensity from './components/LetterDensity';
import StatsBoard from './components/stats/StatsBoard';
import TextInput from './components/TextInput';

function App() {
    return (
        <>
            <main className="px-[15%] max-xl:px-[10%] max-sm:px-[5%]">
                <Header />

                <article className="text-4xl text-center font-semibold pb-6">
                    Analyze your text in real-time.
                </article>

                <TextInput />

                <div className="flex justify-between mt-4">
                    <IncludeSpaces />
                    <ApproximateReadingTime />
                </div>

                <br />
                <br />

                <StatsBoard />

                <br />

                <LetterDensity />

                <br />
            </main>
        </>
    );
}

export default App;
