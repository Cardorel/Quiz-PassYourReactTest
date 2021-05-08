import axios from 'axios';

const CreateData = async (source , params) => {
     await axios.post(`https://apiquizapp.azurewebsites.net/api/${source}` , params);
}

export default CreateData;
