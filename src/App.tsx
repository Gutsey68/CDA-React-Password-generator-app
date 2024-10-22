import BodyCard from './components/BodyCard';
import PasswordCard from './components/PasswordCard';

function App() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-dark font-jetbrain">
            <div className="">
                <h1 className="pb-8 text-center text-xl text-gray">Password Generator</h1>
                <PasswordCard />
                <BodyCard />
            </div>
        </main>
    );
}

export default App;
