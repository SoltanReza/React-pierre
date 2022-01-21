import { useSearchParams } from "react-router-dom";

const useFilter = (defaultInit = {}) => {
    const [searchParams, setFilter] = useSearchParams(defaultInit);
    const filter = {};
    for (let key of searchParams.keys()) {
        filter[key] = searchParams.get(key) || ''
    }
    return [filter, setFilter];
}

export default useFilter;