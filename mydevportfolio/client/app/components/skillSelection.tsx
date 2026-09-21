import StackIcon, {IconName} from "tech-stack-icons";

export default function SkillsSection() {

    const techSkills : Record<string, {label: string, icon: IconName}[]>  = {
        FrontEnd:[ {label: "react", icon: "react"}, {label: "nextjs", icon: "nextjs2"}, {label: "tailwindcss", icon: "tailwindcss"}, {label: "html5", icon: "html5"}, {label: "css3", icon: "css3"}],
        Backend: [
            { label: "NestJS", icon: "nestjs" },
            { label: "Django", icon: "django" },
            { label: "Express", icon: "expressjs" },
            { label: "Node.js", icon: "nodejs" },
            { label: "PostgreSQL", icon: "postgresql" },
            { label: "MySQL", icon: "mysql" },
            { label: "PHP", icon: "php" },
            { label: "MongoDB", icon: "mongodb" },
        ],
        "Data Analysis & ML": [
            { label: "Python", icon: "python" },
            { label: "scikit-learn", icon: "scikitlearn" },
            { label: "Pandas", icon: "pandas" },
            { label: "Streamlit", icon: "streamlit" },
            { label: "seaborn", icon: "seaborn" },
        ],
        "Game Development": [
            { label: "Unity", icon: "unity" },
            { label: "C#", icon: "csharp" },
        ],
        "Android Development": [
            { label: "Kotlin", icon: "kotlin" },
            { label: "Android Studio", icon: "android" },
        ],
        "Penetration Testing": [
            { label: "Kali Linux", icon: "linux" },
        ],
    }

    return (
        <section className="w-full  py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Skills</h1>
                    <p className="text-slate-400">Technologies & Tools</p>
                </div>

                {Object.entries(techSkills).map(([category, techs]) => (
                    <div key={category} className="skill-category px-8 py-10 my-12.5 border-2 border-[#320679a2] rounded-2xl">
                        <div>
                            <h2 className="text-2xl italic font-bold text-white mb-8 text-center">
                                {category}
                            </h2>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-[35px] gap-y-12.5">
                                {techs.map((tech) => (
                                    <div
                                        key={tech.label}
                                        className="techContainer flex flex-col rounded-2xl py-8  items-center justify-center  cursor-pointer"
                                    >
                                        <div className="relative">
                                            <StackIcon name={tech.icon} variant="dark" className="h-10 w-10" />
                                            <p className="pt-2.5 text-[#4bd2c985]">{tech.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}