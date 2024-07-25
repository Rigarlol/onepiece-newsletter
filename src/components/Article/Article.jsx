import { SparklesIcon } from "@heroicons/react/16/solid";

export default function Article({ title, text, tags, image, alt }) {
    return (
        <div className="onepiece-card" >
            <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
                {title}
            </h3>
            <div>
                {image && <img className="p-4 w-80- h-80" src={image} />}
                {image && alt && <span className="sr-only">{alt}</span>}
            </div>
            <div className="w-full flex flex-row flex-wrap justify-end gap-2 pr-5">
                {tags.map((tag) => {
                    return <span key={tag} className="onepiece-tag">{tag}</span>
                })}
            </div>
            <div className="flex gap-1">
                <p className="text-alura-200 dark:text-zinc-400 font-bold text-justify ">{text}</p>
            </div>

        </div>
    )
}