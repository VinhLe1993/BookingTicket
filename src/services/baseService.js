import Axios from "axios";
import {TOKEN_CYBERSOFT_MOVIE} from "../util/settings/config"
import {DOMAIN} from "../util/settings/config"
// import {TOKEN} from "../util/settings/config"

export class baseService {
  //put json về phía backend
//   put = (url,model) => {
//       return axios({
//           url: `${DOMAIN}/${url}`,
//           method: 'PUT',
//           data:model,
//           Headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
//       })
//   }

//   post = (url,model) => {
//       return axios({
//           url: `${DOMAIN}/${url}`,
//           method: 'POST',
//           data:model,
//           Headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
//       })
//   }

  get = (url) => {
    return Axios({
        url: `${DOMAIN}/${url}`,
        method: 'GET',
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT_MOVIE,
          },
    })
} 

//   delete = (url) => {
//       return axios({
//           url: `${DOMAIN}/${url}`,
//           method: 'DELETE',
//           Headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
//       })
//   }
}




