/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { GET_PROFILE, PROFILE_ERROR,CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES,GET_REPOS } from "../actions/types"

const initialstate = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state=initialstate, action) {
    const {type, payload} = action

    switch(type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }
        default:
            return state
}
}