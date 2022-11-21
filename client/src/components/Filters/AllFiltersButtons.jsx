import { BreedFilter } from "./BreedFilter";
import { OriginFilter } from "./OriginFilters";
import { OrderWeight } from "./OrderWeight";
import { FilterTemps } from "./FilterTemps";
import './AllFilters.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions";

export function AllFiltersButtos() {

    const dispatch = useDispatch()
    const temps = useSelector(state => state.temperaments)
    useEffect( () => {
        dispatch(getTemperaments())
    },[dispatch])
    ////
    return (
        <>
            <div class="container fluid container-sm bttns">
                
                <div class='bttn'>
                    <OrderWeight />
                </div>
                <div class='bttn'>
                    <OriginFilter />
                </div>
                <div class='bttn'>
                    <BreedFilter  />
                </div>
                <div class='bttn'>
                    <FilterTemps />
                </div>


            </div>
        </>
    )
}
