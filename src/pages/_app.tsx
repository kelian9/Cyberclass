import '../common/styles/common.scss';
import AppLayout from '../components/layouts/AppLayout/AppLayout';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import getStore from '../store/store';
import { useRouter } from 'next/router';
import withRedux from "next-redux-wrapper";

const makeStore = (initialState, options) => {
    return getStore();
};

export const App = ({Component, pageProps, store}) => {
    const router = useRouter();
    
    const [pageWidth, setPageWidth] = useState(0);
    const [activeHandle, setActiveHandle] = useState(false);

    useEffect(() => {
        if(!activeHandle) {
            setPageWidth(document.body.clientWidth)
            document.body.onresize = () => {
                setPageWidth(document.body.clientWidth)
            }
            setActiveHandle(true);
        }
        router.pathname === '/' ? router.push('/main') : null;
    })

    return (
        <Provider store={store}>
            {router.pathname != '/authorization' && !router.pathname.includes('/registration') ? 
                <AppLayout store={store}>
                    <Component store={store} {...pageProps} pageWidth={pageWidth} />
                </AppLayout> :
                <Component store={store} {...pageProps} pageWidth={pageWidth} />
            }
            {/* <Component {...pageProps} pageWidth={pageWidth} /> */}
        </Provider>
    )
}

export default withRedux(makeStore)(App);