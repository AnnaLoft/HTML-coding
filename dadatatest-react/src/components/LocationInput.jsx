import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIp } from "../features/ip/ipSlice";
import { updateRemoteLocation, selectCity } from "../features/ip/locationSlice";

const LocationInput = function () {
    const locationInfo = useSelector(selectCity);
    const ipInfo = useSelector(selectIp);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateRemoteLocation(ipInfo));
    }, []);
    return (
      
        <div className="info-block__wrapper">
        <p className="uset-info__txt loaction-info__text">Ваша локация:</p>
        <input className="input loaction-info__data" readOnly="readonly" disabled={true}  value={locationInfo}></input>
    </div>
     
    )
}

export default LocationInput;