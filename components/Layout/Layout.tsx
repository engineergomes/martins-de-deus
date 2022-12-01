import Footer from "../Footer";
import Header from "../Header/Header";

interface layoutProps {
    children?: JSX.Element;
}

function Layout({ children, ...props }: layoutProps) {
    return (
        <>
            <Header />

            <div className="pt-32" {...props}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;
