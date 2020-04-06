import React from 'react';
// import { UseReducerFc } from './hook/useReducer';
// import { UseMemoFc } from './hook/useMemo';
// import { UseCallback } from './hook/useCallback';
import UseImperativeHandleParent from './hook/useImperativeHandle';
import { UseLayoutEffect } from './hook/useLayoutEffect';
import { UseDebugValueWrap } from './hook/useDebugValue';
import { UseIntervalDemo, UseCusHookDemo } from './hook/cusHook';

const App = () => {
    return (
        <>
            {/* <ReduxTest /> */}
            {/* <UseReducerFc /> */}
            {/* <UseMemoFc /> */}
            {/* <UseCallback /> */}
            {/* <UseImperativeHandleParent /> */}
            {/* <UseLayoutEffect /> */}
            {/* <UseDebugValueWrap /> */}
            <UseCusHookDemo />
        </>
    );
};

export default App;
