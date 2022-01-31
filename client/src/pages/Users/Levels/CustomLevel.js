import React from "react";
import LevelHeader from "../../../components/LevelHeader";
import {
    useState
} from "react";
import ReactDOM from "react-dom";

class CustomLevel extends React.Component {
        render() {
                function MyForm() {
                    const [inputs, setInputs] = useState({});

                    const handleChange = (event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        setInputs(values => ({
                            ...values,
                            [name]: value
                        }))
                    }

                    const handleSubmit = (event) => {
                        event.preventDefault();
                        alert(inputs);
                    }
                    return (

                        <
                        form onSubmit = {
                            handleSubmit
                        } >
                        <
                        label > numberOfBoxes:
                        <
                        input type = "number"
                        name = "numberOfBoxes"
                        value = {
                            inputs.numberOfBoxes || ""
                        }
                        onChange = {
                            handleChange
                        }
                        /> <
                        /label> <
                        label > lowerRange:
                        <
                        input type = "number"
                        name = "lowerRange"
                        value = {
                            inputs.lowerRange || ""
                        }
                        onChange = {
                            handleChange
                        }
                        /> 
                          <
                        label > upperRange:
                        <
                        input type = "number"
                        name = "upperRange"
                        value = {
                            inputs.upperRange || ""
                        }
                        onChange = {
                            handleChange
                        }
                        />
                          <
                        /label> <
                        input type = "submit" / >
                        <
                        /form>

  
                    }
                    ReactDOM.render( < MyForm / > , document.getElementById('root'));
                }

                export default CustomLevel;
