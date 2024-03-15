function ContactUsPage () {
    return (
        <div className="md:p-16 flex flex-col md:gap-4 justify-center items-center md:flex-row">

            <div className="md:w-2/6 md:flex-col space-y-6 ">

                <h1 className="font-semibold underline underline-offset-2">STORE:</h1>

                <h1 className="text-orange-600 text-2xl font-bold	">SAI RAM FOODS</h1>

                <p className="font-medium text-lg">Brindavan Gardens 2nd Line, Opposite SBI Bank, near Spenser's, GuntUR. Andhra Pradesh - 522002, IndiA.</p>

                <p className="font-medium text-lg">Email: sairamfoods@gmail.com Phone no: 9999999999</p>
                
            </div>

            <div className="md:w-3/6 flex flex-col gap-4 justify-start  items-center">
    <h1 className="font-semibold underline underline-offset-2">WRITE TO US:</h1>

    <form className="flex flex-col justify-center items-center md:w-[250px]">
        <input type="text" placeholder="Name" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none md:w-full"/>
        <input type="text" placeholder="Phone Number" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none md:w-full"/>
        <input type="text" placeholder="Email ID" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none md:w-full"/>
        <input type="text" placeholder="Message" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none md:h-[60px] md:w-full"/>
        <button type="submit" className="bg-[#FCA120] border border-black border-opacity-30 p-2 w-full ">Submit</button>
    </form>
</div>


        </div>
    ) 
}

export default ContactUsPage; 