const Contact = () => {
  return (
    <div className="flex flex-col items-center mx-[280px] mt-10 max-md:mx-8">
      <h1 className="text-3xl font-bold max-md:text-xl mb-4">Contact us</h1>
      <form className="flex flex-col justify-center  w-[40%] bg-slate-200 p-4 rounded-md">
        <input
          type="text"
          className="p-2 my-1 rounded-md"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="p-2 my-1 rounded-md"
          placeholder="Email"
        ></input>
        <textarea
          className="p-2 my-1 rounded-md h-[150px]"
          placeholder="Message"
        ></textarea>
        <button className="mt-4 bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-600 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
