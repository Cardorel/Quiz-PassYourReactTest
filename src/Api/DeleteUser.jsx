import axios from 'axios'


const DeleteUser =  async (id) => {
    await axios.delete(`https://apiquizapp.azurewebsites.net/api/User/${id}`);
}

export default DeleteUser;
