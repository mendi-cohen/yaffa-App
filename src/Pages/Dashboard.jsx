import { useLocation } from 'react-router-dom';
export default function Dashboard () {
const location = useLocation();
const { user } = location.state || {};
    return(
        <>
        <div>
            <h1>  !{user.name} שלום </h1>
        </div>
        </>
    )
}



