import axios from "axios";
import { statusCodes, defaults } from "../../utils";
import globals from "../../utils/Config";

const config = (token) => {
    return (
        {
            headers: {
                'Authorization': token
            }
        }
    )
}

const getUserIpAddress = async () => {
    try{
        const getUserIpAddressReq = await axios.get(globals.IP_ADDRESS_API_URL);

        if(getUserIpAddressReq.status === statusCodes.SUCCESS){
            let ip_data = await getUserIpAddressReq.data;

            const response = defaults.ServiceResponse({
                status: true,
                status_code: statusCodes.SUCCESS,
                message: "Request successfull.",
                data: ip_data
            });
    
            return response
        }
        else {
            const response = defaults.ServiceResponse({
                status: false,
                status_code: statusCodes.BAD_REQUEST,
                message: "Something went wrong. Try again later."
            });
    
            return response
        }
    }
    catch(error){
        console.log(error);
        const response = defaults.ServiceResponse({
            status: false,
            status_code: statusCodes.BAD_REQUEST,
            message: "Something went wrong. Try again later."
        });
        return response
    }
}

const GeneralServices = {
    getUserIpAddress
}

export default GeneralServices