import { Navigate, useLocation } from "react-router";
 
import useAuth from "../hook/useAuth";
import useInstructor from "../hook/useInstructor";
 


const InstrutorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstrutorRoute;