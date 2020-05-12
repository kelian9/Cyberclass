import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";


const AppLayout = ({children, store}) => {
    return(
        <>
            <Header store={store} />
                {children}
            <Footer />
        </>
    )
}

export default AppLayout;