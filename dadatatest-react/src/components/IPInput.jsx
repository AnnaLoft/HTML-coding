import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRemoteIp, selectIp } from "../features/ip/ipSlice";

const IPInput = function () {
    const ipInfo = useSelector(selectIp);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateRemoteIp());
    }, []);

    return (
      
        <div className="info-block__wrapper">
            <p className="uset-info__txt ip-info__text">Ваш внешний IP адрес:</p>
            <input className="input ip-info__data" readOnly="readonly" disabled={true} value={ipInfo}></input>
        </div>
     
    )
}

export default IPInput;