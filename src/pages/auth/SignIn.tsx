import { Button, Checkbox, Input, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { employeeLogin } from "../../api/auth"
import { useNavigate } from "react-router-dom"
import Snackbar from "../../components/SnackBar"
import { EmployeeAuthResponse } from "../../types/auth"
import { useAuth } from "../../hooks/useAuth"

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, SetError] = useState<string>('')
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const { user, setUser, refreshUserData } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/dashboard/home');
        }
    }, [user]);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (!email || !password) {
            SetError('Please fill in all fields')
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);

        try {
            const data = await employeeLogin({ email, password }) as EmployeeAuthResponse;

            if (data?.access_token && data?.refresh_token) {
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('refresh_token', data.refresh_token)

                setUser(data.user)

                await refreshUserData();
            } else {
                SetError('Email or Password is incorrect')
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Login error:', error);
            SetError('An error occurred during login')
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="flex gap-4">
            <div className="w-full flex flex-col items-center justify-center lg:w-3/5 mt-24">
                <div className="lg:w-2/3 flex flex-col justify-center items-center">
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                        <div className="text-start">
                            <Typography variant="h3" className="font-bold ">Welcome to Nightowl</Typography>
                            <Typography variant="paragraph" className="text-md text-gray-700 font-normal">Please login with your details</Typography>
                        </div>
                        <div className="mb-1 flex flex-col gap-6 lg:mt-8">
                            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                Email
                            </Typography>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                size="lg"
                                placeholder="johndoe@gmail.com | 5552223344"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                crossOrigin={undefined}
                                disabled={loading}
                            />
                            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                Password
                            </Typography>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                crossOrigin={undefined}
                                disabled={loading}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-6">
                            <Checkbox
                                label={<Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center justify-start font-medium"
                                >
                                    Remember me
                                </Typography>}
                                containerProps={{ className: "-ml-2.5" }}
                                crossOrigin={undefined}
                            />
                            <Typography variant="small" className="font-medium text-gray-900">
                                <a href="#" className="underline">
                                    Forgot Password
                                </a>
                            </Typography>
                        </div>
                        <Button
                            type="submit"
                            className="mt-6 capitalize p-3 text-lg rounded-2xl bg-blue-700"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </form>
                </div>
                <Snackbar message={error} open={snackbarOpen} onClose={() => setSnackbarOpen(false)} />
            </div>

            <div className="w-2/5 min-h-screen hidden lg:flex">
                <img
                    src="https://www.shutterstock.com/shutterstock/photos/1091505905/display_1500/stock-vector-people-in-street-cafe-vector-cartoon-illustration-couple-sitting-at-the-table-and-drinking-coffee-1091505905.jpg"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default SignIn