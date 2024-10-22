import BodyCard from './components/BodyCard';
import PasswordCard from './components/PasswordCard';

function App() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-dark font-jetbrain">
            <div className="w-full max-sm:px-4">
                <h1 className="pb-8 text-center text-xl text-gray">Password Generator</h1>
                <PasswordCard />
                <BodyCard />
            </div>
        </main>
    );
}

export default App;
