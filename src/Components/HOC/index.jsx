import WithSpinner from "../Spiner/Spiner";
import {useSelector} from 'react-redux'



export const WithUser = (WrappedComponent) => {
    const FetchData = (props) => {
        const user = useSelector(t => t.User);
       return user == null ? <WithSpinner /> : <WrappedComponent user ={user} {...props} />;
    }

    return FetchData;
}