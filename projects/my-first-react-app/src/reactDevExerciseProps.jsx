import { getImageUrl } from './utils.js';


// Exercise 1, setting up props to eliminate duplicate code


function Profile({ person, className = "avatar", imageSize = 70 }) {

    let sizeLetter = "s";

    if (imageSize > 90) {
        sizeLetter = "b";
    }
    const imageSrc = getImageUrl(person, sizeLetter);

    return (
        <section className="profile">
            <h2>{person.name}</h2>
            <img
                className={className}
                src={imageSrc}
                alt={person.name}
                width={imageSize}
                height={imageSize}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {person.prof}
                </li>
                <li>
                    <b>Awards: 4 </b>
                    {person.awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {person.discovery}
                </li>
            </ul>
        </section>
    )
}




export function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>

            <Profile person={{
                imageId: 'szV5sdG',
                name: 'Maria Skłodowska-Curie',
                prof: "physicist and chemist",
                discovery: "polonium (chemical element)",
                awards: [
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal"
                ]
            }}
            />

            <Profile person={{
                imageId: 'YfeOqp2',
                name: 'Katsuko Saruhashi',
                prof: "geochemist",
                discovery: "a method for measuring carbon dioxide in seawater",
                awards: [
                    "Miyake Prize for geochemistry",
                    "Tanaka Prize"
                ]
            }}
            />

        </div >
    );
}


// exercise 2, chnaging conditions of data passed


function Avatar({ person, size }) {

    let sizeLetter = "s";

    if (size > 90) {
        sizeLetter = "b";
    }

    return (
        <img
            className="avatar"
            src={getImageUrl(person, sizeLetter)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export function Profile1() {

    console.log("profile rendered");

    return (
        <div className='ZaraYara'>
            <Avatar
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar
                size={120}
                person={{
                    name: 'Gregorio Z. Yara',
                    imageId: '7vQD0fP'
                }}
            />
        </div>

    );
}

//exercise 3, using children variant of props

function Card({ internal }) {

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    {internal}
                </div>
            </div>
        </div>

    )
}


export function Profile2() {
    return (
        <div>
            <Card>
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card>
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>

    );
}