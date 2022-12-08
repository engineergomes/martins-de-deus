import Footer from "../Footer";
import Header from "../Header/Header";

interface layoutProps {
    children?: JSX.Element;
}

function Layout({ children, ...props }: layoutProps) {
    return (
        <div className="max-w-[100vw] overflow-hidden">
            <Header />

            <div className="pt-20 sm:pt-32" {...props}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
