import {useAuth} from '../Components/AuthContext';

export default function Dashboard () {
const user = useAuth();
console.log(user);
    return(
        <>
        <div>
            <h1> {`!שלום ${user.user.name}`} </h1>
        </div>
        </>
    )
}



