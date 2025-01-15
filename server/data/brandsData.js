import castroLogo from '../images/castroLogo'
import castroModel from '../images/castroModel'
import renuarLogo from '../images/renuarLogo'
import renuarModel from '../images/renuarModel'

const Brands = [
  {
    "id": 1,
    "name": "castro",
    "logo": castroLogo,
    "image": castroModel,
    "home_page": "https://www.castro.com/",
    "links": [
        {
            "creteria": "size",
            "size": "XL",
            "type": "top",
            "link": "www1"
        },
        {
            "creteria": "size",
            "size": "L",
            "type": "bottom",
            "link": "www2"
        },
        {
            "creteria": "about",
            "link": "www3"
        }
    ]
  },
  {
    "id": 2,
    "name": "renuar",
    "logo": renuarLogo,
    "image": renuarModel,
    "home_page": "https://www.renuar.co.il/home?page=women",
    "links": [
        {
            "creteria": "size",
            "size": "XL",
            "type": "top",
            "link": "www1"
        },
        {
            "creteria": "size",
            "size": "L",
            "type": "bottom",
            "link": "www2"
        },
        {
            "creteria": "about",
            "link": "www3"
        }
    ]
  }
] ;

export default Brands;