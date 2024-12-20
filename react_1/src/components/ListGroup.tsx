import { Fragment } from "react/jsx-runtime";

function ListGroup() {
    const citys = ["Patna","Delhi","Saran","Gopal"];
    return (
        <>
            <h1>List Groups</h1>
            <ul className="list-group">
                {citys.map((city, index) => (
                    <li key={index} className="list-group-item">{city}</li>
                ))}
            </ul>
        </>

    );
}
export default ListGroup;