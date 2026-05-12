// import your server action here

import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";


export default function SignUp()
{
    return (
        <section>
            <form>
                <div>
                    <FaUser/>
                    <input type="text"/>
                </div>
                <div>
                    <RiLockPasswordFill/>
                    <input type="password"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}