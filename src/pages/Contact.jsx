export default function Contact({}) {
  return (
    <div className="flex flex-col justify-center p-5 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-7">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-m font-medium text-slate-700"
          >
            Message:
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
          />
        </div>

        {/* Button Send Message */}
        <button
          type="submit"
          className="w-fit px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-150"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
