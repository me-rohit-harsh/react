import "../App.css";

function ListGroup() {
    let citys = ["Patna", "Delhi", "Saran", "Gopal"];
    citys = [];
    if (citys.length == 0) {
        return <> <h1>List Groups</h1>
            <ul className="list-group">
                <li className="list-group-item">No any item</li>
            </ul> </>
    }else{
        return (
            <>
                <ul className="list-group">
                    {citys.map((city, index) => (
                        <li key={index} className="list-group-item">{city}</li>
                    ))}
                </ul>
            </>



        );
    }
   

}
export default ListGroup;