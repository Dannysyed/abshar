import Navbar from '../../components/Navbar'
import '../../styles/globals.css'
import Head from 'next/head';
import icon from '../../public/favicon.ico'
export const metadata = {
    title: 'Abshar',
    description: 'Version 1.0.1'
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <Head>
                <link rel="icon" href='../../public/favicon.ico' />
            </Head>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                {/* <main className='app'> */}
                <Navbar />
                {children}
                {/* </main> */}
            </body>
        </html>
    )
}

export default RootLayout