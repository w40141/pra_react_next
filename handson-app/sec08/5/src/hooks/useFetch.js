import {useState, useEffect} from "react";
import {useMountedRef} from "./useMountedRef";

export const useFetch = (uri) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const mounted = useMountedRef();

    useEffect(() => {
        if (!uri) return;
        if (!mounted) return;
        fetch(uri)
            .then((data) => {
                if (!mounted.current) throw new Error("component is no mounted");
                return data
            })
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return {loading, data, error};
};
