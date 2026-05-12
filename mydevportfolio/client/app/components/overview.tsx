export default function OverviewView() 
{
    return (
        <>
            {/* Inline keyframes — avoids needing globals.css changes */}
            <style>
                {`
                    @keyframes gradientShift {
                        0%   { background-position: 0% 50%; }
                        50%  { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animated-gradient-text {
                        background: linear-gradient(270deg, #3b82f6, #ef4444, #a855f7, #000000, #3b82f6);
                        background-size: 300% 300%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: gradientShift 5s ease infinite;
                    }
                `}
            </style>

            <div className="flex flex-col items-start justify-center h-full px-4 py-10 max-w-4xl">
                {/* Welcome headline */}
                <h1
                    className="animated-gradient-text font-extrabold uppercase tracking-tight leading-tight"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
                >
                    Welcome Alson Gard
                    <br/>
                    To Your Portfolio
                </h1>

                {/* Sub-line */}
                <p className="mt-6 text-white/50 text-lg md:text-xl font-light tracking-widest uppercase">
                    Crafting &amp; Building Beyond Imagination
                </p>

                {/* Decorative rule */}
                <div className="mt-8 h-px w-32 bg-gradient-to-r from-blue-500 via-red-500 to-violet-500 opacity-60 rounded-full" />
            </div>
        </>
    );
}