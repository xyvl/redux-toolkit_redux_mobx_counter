import { useDispatch, useSelector } from "react-redux";
import {TypedUseSelectorHook} from 'react-redux'
import { TypeDispatch, TypeSelector } from "../store/store"

export const useCustomDispatch = () => useDispatch<TypeDispatch>()
export const useCustomSelector: TypedUseSelectorHook<TypeSelector> = useSelector