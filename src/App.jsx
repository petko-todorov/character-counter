import Header from './components/Header';
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

                <StatsBoard />
            </main>
        </>
    );
}

export default App;
