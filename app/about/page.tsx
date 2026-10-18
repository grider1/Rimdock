import Image from "next/image"

export default function About() {
    return (
        <div>
            <Image src="/ridge_comic_hero.jpg" width={400} height={650} alt="Ridge holding up the coffee and eggs comic" />
            <h2>"Ridge is a young queer boy artist making ends meet in the great city of Salt Lake. Working shifts at tulies in the morning and 
                creating comics and music at night."</h2>
        </div>
    )
}