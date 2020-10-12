import React, {useState} from 'react';

interface HeaderProps {
    firstName : string;
    lastName ?: string
}

interface Movie {
    title:string;
    date ?:string;
    rating ?: string;
    description ?:string
}

// Written as a function expression
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>

function Header1(props:HeaderProps) {

    const [count, setCount] = useState <number>(0);
    const [movie, setMovie ] = useState<Movie | null>(null);

    const increment = () => {
        setCount(count + 1);
        var obj = {title: 'ABC'}
        setMovie( obj );
    }

    return (
        <div>
            Header file
            
            {props.firstName} - {props.lastName} - count {count}
            
            <br/>Movie {movie != null ? movie.title : 'Empty'}

            <OtherHeading/>

            <br/><button onClick={increment}>Clickme</button>
        </div>
    );
}

export default Header1;
