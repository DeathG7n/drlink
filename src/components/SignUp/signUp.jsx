export default function Login(){
    return(
        <section>
            <form>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                </div>
                <div>
                    <input type="email" placeholder="Enter your email address"/>
                </div>
                <div>
                    <input type="phone" placeholder="Enter your email address"/>
                </div>
                <div>
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <div>
                    <input type="password" placeholder="Confirm your password"/>
                </div>
            </form>
        </section>
    )
}