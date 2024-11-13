import "../App.css";

function Contact() {
  return (
    <div>
      <h2 className="flex justify-center text-gray-300 uppercase pt-4">
        get in touch
      </h2>
      <div className="bg-customgray rounded-lg flex justify-center space-x-96 pt-6 pb-6 mt-10 mb-10 mx-10 ">
        <div>
          <h2 className="text-gray-300">Let's discuss</h2>
          <ul>
            <li className="mb-[1rem]">
              <div class="flex items-center gap-2">
                <p class="text-customGray bg-customRed rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                  <i class="fa-solid fa-phone"></i>
                </p>
                <a href="tel:+254707168253" className="text-gray-300">
                  +254707168253
                </a>
              </div>
            </li>
            <li className="mb-[1rem]">
              <div class="flex items-center gap-2">
                <p class="text-customGray bg-customRed rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                  <i class="fa-solid fa-envelope"></i>
                </p>
                <a
                  href="mailto:kisiiheartassociation@gmail.com"
                  className="text-gray-300"
                >
                  kisiiheartassociation@gmail.com
                </a>
              </div>
            </li>
            <li className="mb-[1rem]">
              <div class="flex items-center gap-2">
                <p class="text-customGray bg-customRed rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                  <i class="fa-sharp-duotone fa-solid fa-location-dot"></i>
                </p>
                <a className="text-gray-300">Kisii, Kenya</a>
              </div>
            </li>
          </ul>
        </div>

        <form class="mx">
          <div class="space-y-5">
            <div class="pb-6">
              <div>
                <div class="sm:col-span-3">
                  <label
                    for="full-name"
                    class="block text-sm/6 font-medium text-gray-300 first-letter:uppercase"
                  >
                    full name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autocomplete="given-name"
                      placeholder="Enter name"
                      class="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-4 mb-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-300 first-letter:uppercase"
                  >
                    email
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="given-email"
                      placeholder="Enter email"
                      class="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-4 mb-4"
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="about"
                    class="block text-sm/6 font-medium text-gray-300 first-letter:uppercase"
                  >
                    add message
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      placeholder="Your message"
                      class="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-4"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                >
                  Send Message <i class="fa-regular fa-message ml-2"></i>
                </button>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;
