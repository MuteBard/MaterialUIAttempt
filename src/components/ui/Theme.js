 import { createMuiTheme } from '@material-ui/core/styles';


const ARCHBLUE = "#0B72B9"
const ARCHORANGE = "#FFBA60"

//https://material-ui.com/customization/default-theme/
 export default createMuiTheme({
   palette : {
     common : {
       blue : ARCHBLUE,
       orange : ARCHORANGE
     },
     primary: {
       main : ARCHBLUE
     },
     secondary : {
       main : ARCHORANGE
     }
   },
   typography: {
     h3 : {
       fontWeight : 300
     }
   }
 })
