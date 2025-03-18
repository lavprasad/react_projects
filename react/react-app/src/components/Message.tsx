
interface Props {
    name: string;
    age: number;
}

const Message:React.FC<Props> = ({name,age}) => {
    return(
        <div>
            <h1>Hello {name}</h1>
            <p>Your age is {age}</p>
        </div>
    );
};

export default Message;