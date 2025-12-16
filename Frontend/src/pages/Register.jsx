import { useState } from "react";
import { Link } from "react-router-dom"; 
import { ShieldUser } from "lucide-react";

export default function Register(){

    const [rusername , setRUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState(''); 
 
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleregister = async (e) => {
        e.preventDefault();
        setMessage('');
        setError(false);

        if (password !== confirmPassword) {
            setMessage("Error: Passwords do not match!");
            setError(true);
            return;
        }
        if (!rusername ||!email || !password || !confirmPassword ){
            setMessage("Please fill all the forms..")
            return;
        }

        const registrationData = {
            username: rusername,
            email: email,
            password: password,
        };
        
        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage("Registration successful! You can now log in.");
                setRUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                const errorMessages = Object.values(data).flat().join(' ');
                setMessage(`Registration failed: ${errorMessages}`);
                setError(true);
            }
        } catch (error) {
            setMessage("A network error occurred. Please ensure the backend is running.");
            setError(true);
            console.error('Fetch error:', error);
        }
    };

    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center relative">

            <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
                <img 
                    src="https://cdn.bookmyforex.com/blog/uploads/2023/08/6-Best-International-Money-Transfer-Services-in-India.png" 
                    alt="Abstract financial background" 
                    className="blur-sm w-full h-full object-cover opacity-50" 
                />
            </div>


            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-2xl relative z-10">
                
                <h1 className="flex items-center justify-center text-4xl font-extrabold text-gray-800 mb-2 gap-2">
                    <ShieldUser size={36} className="text-blue-600"/> REGISTER
                </h1>
                <p className="text-sm font-medium text-center text-gray-500 mb-4" >Create your account to connect with us</p>

                {message && (
                    <div className={`p-3 rounded-lg text-center font-bold mb-4 ${error ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleregister} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-1"> 
                        <label className="text-gray-600 font-semibold text-sm">Username</label>
                        <input 
                            type="text"
                            className="p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                            placeholder="Enter your username"
                            value={rusername} 
                            onChange={e => setRUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-semibold text-sm">Email</label>
                        <input 
                            type="email"
                            className="p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                            placeholder="Enter your email"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                 
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-semibold text-sm">Password</label>
                        <input 
                            type="password"
                            className="p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                            placeholder="Enter your password"
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-semibold text-sm">Confirm Password</label>
                        <input 
                            type="password"
                            className="p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                            placeholder="Re-enter your password"
                            value={confirmPassword} 
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="mt-4 bg-green-600 text-white p-3 rounded-lg text-xl font-bold hover:bg-green-700 transition duration-150 shadow-md w-full"
                    >
                        Create Account
                    </button>
                    
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Already registered?
                        <Link 
                            to="/login" 
                            className="font-bold text-blue-600 hover:text-blue-800 ml-1 hover:underline transition duration-150"
                        >
                            Login
                        </Link>
                    </p>
                </form> 
            </div>
        </div>
    );
}