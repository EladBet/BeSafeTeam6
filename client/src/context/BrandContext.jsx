import { createContext, useContext } from 'react'

// create context with an empty object
export const BrandContext = createContext({});
// create hook that return the data from the context
const useBrand = () => useContext(BrandContext);

export default useBrand;