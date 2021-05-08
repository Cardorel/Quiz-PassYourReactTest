import axios from 'axios';
import {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import WithSpinner from '../Components/Spiner/Spiner';
import { fetchDataAction } from '../Redux/Actions';

export const WithData = (WrappedComponent, source) => {
    const FetchData = (props) => {
        const [isLoaded, setIsLoaded] = useState(false)
        const dispatch = useDispatch();
        const datas = useSelector(t => t.Datas);
       useEffect(() => {
           const fetchData = async () =>{
            const res = await axios.get(`https://apiquizapp.azurewebsites.net/api/${source}`);
            const data = await res.data;
            dispatch(fetchDataAction(data))
            setIsLoaded(true);
           }
           fetchData();
       }, [dispatch , isLoaded])
       return !isLoaded ? <WithSpinner /> : <WrappedComponent data={datas} {...props} />;
    }

    return FetchData;
}