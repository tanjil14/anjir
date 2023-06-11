import img from "../../assets/images/email-footer.png"
const Newsletter = () => {
    return (
        <section className="-mb-[6.6rem] z-10 relative">
            <div className="w-11/12 mx-auto lg:pb-10 relative">
              <div className="flex xl:w-8/12 mx-auto flex-col items-center lg:flex-row gap-2 md:gap-4 bg-[#0080d7] p-5 md:p-8 rounded-xl relative z-10">
                 <div className="w-full lg:w-4/12 text-center lg:text-left relative z-10">
                 <h4 className="text-white text-2xl font-semibold tracking-tighter">NEWSLETTER SUBSCRIBE</h4>
                 <p className="text-white text-lg py-2 leading-tight">Sign up with your email address to updates.</p>
                 </div>
                 <div className="w-full lg:w-8/12 relative z-10">
                   <form>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
                     <input type="text" className="rounded-md w-full border border-gray-300 h-14 focus:outline focus:outline-1 px-4 placeholder:font-light placeholder:text-lg" name="name" required placeholder="Name"/>
                     <input className="rounded-md w-full border border-gray-300 h-14 focus:outline focus:outline-1 px-4 placeholder:font-light placeholder:text-lg" placeholder="Email" type="email" name="email" required></input>
                     <button type="submit" className="rounded-md w-full transition-all col-span-full md:col-span-1 cursor-pointer work-sans bg-[#115c8f] hover:bg-[#0e476d] font-bold text-white uppercase text-xl md:text-xl 2xl:text-2xl text-center px-4 h-[3.5rem]  flex items-center justify-center">
                            SUBMIT
                        </button>
                    </div>
                   </form>
                 </div>
                 <img className="absolute left-0 top-0 h-[130px] opacity-20" src={img} alt="email photo" />
              </div>
            </div>
        </section>
    );
};

export default Newsletter;