import axios from 'axios'


const DeleteData =  async (id) => {
    await axios.delete(`https://apiquizapp.azurewebsites.net/api/Question/${id}`);
}

export default DeleteData;
