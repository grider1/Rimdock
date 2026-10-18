import Image from "next/image"

export default function Info() {
    return (
        <div className="sub-page">
            <p>cartoonist in SLC, UT</p>
            <ul>
                <li>ridgewmurd@gmail.com</li>
                <li>@rimdock</li>
            </ul>
            <div className="center_content">
                <Image className="face-shot" src="/face_shot.jpg" width={150} height={150} alt="Ridge Murdock's face"/>
            </div>
        </div>
    )
}