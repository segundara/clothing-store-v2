import React, { useEffect } from 'react'
import PaginationHandler from '../listingHandler/PaginationHandler';
import { useDispatch, useSelector } from "react-redux";

const FinalOutputHandler = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {

        const finalData = () => {

            const finalInfo = state.data.groupedByCategory;

            const finalList = Object.entries(finalInfo).map(([Category, Product]) => ({ Category, Product }));

            dispatch({
                type: "GET_FINAL_DATA",
                payload: finalList
            })

        }

        finalData()

    }, [dispatch, state.data.groupedByCategory])

    return (
        <>
            <PaginationHandler />
        </>
    )
}

export default FinalOutputHandler
