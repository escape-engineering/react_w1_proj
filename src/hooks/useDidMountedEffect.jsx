import { useEffect, useRef } from "react";

const useDidMountedEffect = (func, deps) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) func();
        else {
            isMounted.current = true;
        }
    }, [deps]);
};

export default useDidMountedEffect;
