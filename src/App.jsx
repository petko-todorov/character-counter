import Header from './components/Header';
import IncludeSpaces from './components/IncludeSpaces';
import LetterDensity from './components/LetterDensity';
import StatsBoard from './components/stats/StatsBoard';
import TextInput from './components/TextInput';

function App() {
    return (
        <>
            <main className="px-[15%] ">
                <Header />

                <article className="text-4xl text-center font-semibold pb-6">
                    Analyze your text in real-time.
                </article>

                <TextInput />

                <br />

                <IncludeSpaces />

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
