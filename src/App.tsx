import AppRouting from './Routes/AppRouting'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { ToastContainer, Bounce } from 'react-toastify'
import store from './Store/store';

const queryClient = new QueryClient();

const App = () => {
    return (
        <>

            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                <ToastContainer 
                    limit={3}
                    className="toaster"
                    closeOnClick
                    pauseOnHover
                    theme="light"
                    newestOnTop
                    transition={Bounce}
                    position="top-right"
                    autoClose={1000}
                />
                <AppRouting />
                </Provider>
            </QueryClientProvider>
        </>
    )
}

export default App