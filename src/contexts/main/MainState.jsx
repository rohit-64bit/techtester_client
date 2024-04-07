import React, { useState } from 'react'
import MainContext from './MainContext'
import { SERVER_URL } from '../../services/Helpers'

const MainState = ({ children }) => {

    const [itemList, setItemList] = useState({
        data: [],
        loading: false,
        error: null
    })

    const [serviceList, setServiceList] = useState({
        data: [],
        loading: false,
        error: null
    })

    const [reviewListUser, setReviewListUser] = useState({
        data: [],
        loading: false,
        error: null
    })

    const [reviewListAdmin, setReviewListAdmin] = useState({
        data: [],
        loading: false,
        error: null
    })

    const fetchItems = () => {

        setItemList({
            ...itemList,
            loading: true
        })

        fetch(`${SERVER_URL}item`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {

                if (json.error) {
                    setItemList({
                        data: null,
                        loading: false,
                        error: json.error
                    })
                }
                setItemList({
                    data: json,
                    loading: false,
                    error: null
                })

            })
            .catch(error => {
                setItemList({
                    data: [],
                    loading: false,
                    error: error
                })
            })

    }

    const fetchServices = () => {

        setServiceList({
            ...serviceList,
            loading: true
        })

        fetch(`${SERVER_URL}service`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {

                if (json.error) {
                    setServiceList({
                        data: null,
                        loading: false,
                        error: json.error
                    })
                }
                setServiceList({
                    data: json,
                    loading: false,
                    error: null
                })

            })
            .catch(error => {
                setServiceList({
                    data: [],
                    loading: false,
                    error: error
                })
            })

    }

    const fetchReviewsUser = () => {

        setReviewListUser({
            ...reviewListUser,
            loading: true
        })

        fetch(`${SERVER_URL}review/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {

                if (json.error) {
                    setReviewListUser({
                        data: null,
                        loading: false,
                        error: json.error
                    })
                }
                setReviewListUser({
                    data: json,
                    loading: false,
                    error: null
                })

            })
            .catch(error => {
                setReviewListUser({
                    data: [],
                    loading: false,
                    error: error
                })
            })

    }

    return (
        <MainContext.Provider
            value={{

            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainState