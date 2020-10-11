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

            <br/><button onClick={increment}>Clickme</button>
        </div>
    );
}

export default Header1;