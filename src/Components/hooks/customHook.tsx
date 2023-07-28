import { useState } from 'react';

export const CustomHook = () => {
    const [customHookCount, setCustomHookCount] = useState<number>(0);

    const incrementCustomHookCount = (): void => {
        setCustomHookCount(customHookCount+1);
    }
    return { customHookCount, incrementCustomHookCount };
}