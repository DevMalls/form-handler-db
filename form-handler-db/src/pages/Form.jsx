import Card from "../UI/Card";
import InputForm from "./InputForm";
import { useLocation } from 'react-router-dom';

const Form = (props) =>{
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const params = queryParam.get('id');
    // console.log(params);
    return (
        <Card>
            <h2>Fill the Details:</h2>
            <InputForm inputId={params}/>
        </Card>
    );
}
export default Form;