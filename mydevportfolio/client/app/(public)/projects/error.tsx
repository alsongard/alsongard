'use client';

export default function ProjectError({error,reset,}: {  error: Error & { digest?: string }; reset: () => void;}) {
    return (

        <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-gray-500 mt-2">
                We couldn't load the projects. Please try again.
            </p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-black text-white rounded"
            >
                Try again
            </button>
        </div>
    );
}

/*
in the above error contains the error message 
the reset function tries to rerun the getProjects() server fetch action.
*/