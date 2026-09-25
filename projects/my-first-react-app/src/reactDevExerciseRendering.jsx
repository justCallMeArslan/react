import { people, recipes } from './data.js';
import { getImageUrl } from './utils.js';
import { Fragment } from 'react';


//exercise 1

export function List() {

    const chemists = people.filter(person => person.profession === "chemist");
    const everyoneElse = people.filter(person => person.profession !== "chemist");

    const listChemists = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    const listEveryone = everyoneElse.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listChemists}</ul>
            <ul>{listEveryone}</ul>
        </article>
    );
}

// exercise 2, 3

function Recipe({ name, ingredients }) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>{ingredients.map(ingredient =>
                <li key={ingredient}>
                    <p>
                        {ingredient}
                    </p>
                </li>
            )}
            </ul>
        </div>
    );
}

export function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <Recipe {...recipe} key={recipe.id} />
            )}
        </div>
    );
}


//exercise 4

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) =>
                <Fragment key={index}>
                    {index > 0 && <hr />}
                    <p >
                        {line}
                    </p>
                </Fragment>
            )}
        </article>
    );
}


export function PoemViaLoop() {

    let output = [];

    poem.lines.forEach((line, index) => {
        output.push(
            <p key={index + "-fillerForP"}>
                {line}
            </p>
        )
        output.push(
            <hr key={index + "-fillerForHr"} />
        );

    });
    output.pop();

    return (
        <article>
            {output}
        </article>

    )
}