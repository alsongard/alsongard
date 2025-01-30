function Contact()
{
    return (
        <section>
            <form className="flex flex-col">
                <label>Name:</label>
                <input type='text' placeholder="Enter name..."/>
                <label>Email:</label>
                <input type='email' placeholder="Enter email..."/>
                <label>Project:</label>
                <textarea placeholder="Provide a description of the project "/>

                <input type="submit" value="submit"/>
            </form>
        </section>
    )
}

export default Contact;