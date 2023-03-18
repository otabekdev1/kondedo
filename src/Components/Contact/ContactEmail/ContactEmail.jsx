import React from "react";
import "./ContactEmail.css";
export default function ContactEmail() {
  return (
    <div className="container max-w-[1440px] m-auto h-[auto]">
      <div className="flex justify-between items-center flex-wrap p-[20px]">
        <div className="w-[636px] h-[799px] p-[50px_30px] border border-[#e6e6e6] rounded-3xl m-[0px_auto_40px] xl:h-auto">
          <h3 className="text-[32px] font-semibold md:text-[27px]">Contact Us Right Here</h3>
          <div className="flex justify-between xl:flex-col">
            <div className="flex flex-col w-[48%] mb-[30px] xl:w-full">
              <span className="text-[16px] mb-[10px] font-medium text-[#424242]">
                Name<span className="text-red-600 text-[20px]">*</span>
              </span>
              <input
                type="text"
                className="w-full p-[0px_15px] h-[58px] outline-none border-[#E6E6E6] border rounded-[16px]"
              />
            </div>
            <div className="flex flex-col w-[48%] mb-[30px] xl:w-full">
              <span className="text-[16px] mb-[10px]">
                Email <span className="text-red-600 text-[20px]">*</span>
              </span>
              <input
                type="text"
                className="w-full p-[0px_15px] h-[58px] outline-none border-[#E6E6E6] border rounded-[16px]"
              />
            </div>
          </div>
          <div className="flex justify-between xl:flex-col">
            <div className="flex flex-col w-[48%] mb-[30px] xl:w-full">
              <span className="text-[16px] mb-[10px] font-medium text-[#424242]">
                Phone<span className="text-red-600 text-[20px]">*</span>
              </span>
              <input
                type="text"
                className="w-full p-[0px_15px] h-[58px] outline-none border-[#E6E6E6] border rounded-[16px]"
              />
            </div>
            <div className="flex flex-col w-[48%] mb-[30px] xl:w-full">
              <span className="text-[16px] mb-[10px] font-medium text-[#424242]">
                Phone<span className="text-red-600 text-[20px]">*</span>
              </span>
              {/* <input
                type="text"
                
              /> */}
              <select
                name="select"
                className="w-full p-[0px_15px] h-[58px] outline-none border-[#E6E6E6] border rounded-[16px] "
              >
                <option className="w-[130px] h-[60px]">Значение 1</option>
                <option>Значение 2</option>
                <option>Значение 3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-[100%]  mb-[30px]">
              <span className="text-[16px] mb-[10px] font-medium text-[#424242]">
                Comments <span className="text-red-600 text-[20px]">*</span>
              </span>

              <textarea className="w-full p-[0px_15px]  outline-none border-[#E6E6E6] border rounded-[16px] h-[200px] resize-none mb-[30px]"></textarea>
              <div className="flex gap-3 mb-[40px]">
                <input
                  type="checkbox"
                  className="w-[18px] h-[19px] accent-[black] rounded-lg"
                />
                <p className="text-[#1b1b1b] text-[16px] font-normal">
                  Save Data for Next Comment
                </p>
              </div>
              <button className="text-[16px] text-[white] bg-[#ffb924] w-[152px] rounded-3xl p-[0px_40px] h-[50px] font-medium lg:mb-[30px] btn-contact-hover">
                Send Now
              </button>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.441927201!2d64.57358194999999!3d41.38116605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1678558458372!5m2!1sru!2s"
          className="w-[636px] h-[799px] m-[0px_auto_40px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
