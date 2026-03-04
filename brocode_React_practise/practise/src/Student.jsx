import PropTypes from 'prop-types';
import './App.css';

function Student(props) { // or we can use the default value  using the parentehsis by curly braces
    return (
        <div className="propsContainer">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes student" : "not a student"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false
};

export default Student;
