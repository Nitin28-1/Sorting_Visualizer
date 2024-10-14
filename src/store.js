import {combineReducers} from "@reduxjs/toolkit"
import UpdatePropsValue from "./Slices/UpdatePropsValue";

const rootReducer = combineReducers({

    updatePropValue:UpdatePropsValue,
})

export default rootReducer;