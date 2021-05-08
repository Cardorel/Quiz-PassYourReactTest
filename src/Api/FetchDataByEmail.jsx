import axios from 'axios';
import {
    useEffect,
    useState
} from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import WithSpinner from '../Components/Spiner/Spiner';
import {
    fetchDataByEmailAction
} from '../Redux/Actions';

export default function WithDataByEmail(WrappedComponent) {
    const FetchData = (props) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const dispatch = useDispatch();
        const datas = useSelector(t => t.UserByEmail);
        const user = useSelector(t => t.User);
        useEffect(() => {
                const fetchData = async () => {
                    let res = await axios.get(`https://apiquizapp.azurewebsites.net/api/User/GetByEmail/${user.email}`);
                    setIsLoaded(true);
                    let data = await res.data;
                    dispatch(fetchDataByEmailAction(data))
                }
                fetchData();
        }, [dispatch , user])
        return !isLoaded ? < WithSpinner / > : < WrappedComponent data = {
            datas
        } {
            ...props
        }
        />;
    }
    return FetchData;

}