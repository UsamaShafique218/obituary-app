"use client";
import React, { useState } from "react";
import strings from "../../strings";
import Link from "next/link";
import userService from "@/services/user-service";
import toast from "react-hot-toast";

const ContactFormPage = () => {
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueTodo, setInputValueTodo] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");
  const [inputValueMatter, setInputValueMatter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleValueTodoInput = (event) => {
    setInputValueTodo(event.target.value);
  };

  const handleValueMessageInput = (event) => {
    setInputValueMessage(event.target.value);
  };

  const handleValueMatterInput = (event) => {
    setInputValueMatter(event.target.value);
  };

  const resetForm = () => {
    setInputValueEmail('');
    setInputValueTodo('');
    setInputValueMessage('');
    setInputValueMatter('');
  }

  const handleSubmit = async () => {
    try {
      if (!inputValueEmail || !inputValueTodo || !inputValueMessage || !inputValueMatter) {
        toast.error('Fill all details');
        return;
      }
      setLoading(true);
      await userService.saveContact({
        name: inputValueTodo,
        email: inputValueEmail,
        subject: inputValueMatter,
        message: inputValueMessage
      });
      resetForm();
      setLoading(false);
      toast.success('Povpraševanje je bilo uspešno poslano.');
    } catch (err) {
      resetForm();
      setLoading(false);
      toast.error('Some error occured');
    }
  }

  return (
    // Main Container for all the content and background
    <div
      className={`w-full min-h-screen pt-[98px] pb-[123px] bg-[url('/Kontakt.avif')] mx-auto  bg-center bg-cover flex flex-col`}
    >
      {/* Container for top texts */}
      <div className=" mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] h-auto">
        <div className="font-sourceSerif text-[32px] text-center font-semibold leading-[44px] font-variation-customOpt32 text-[#1E2125]">
          {strings.Pišitenam}
        </div>
        <div className="text-[16px] flex mobile:hidden text-center leading-[24px] mt-[10px] text-[#3C3E41] font-variation-customOpt16">
          {strings.ImateVprašanjePredlogeKomentarjePišiteNam}
        </div>
        <div className="text-[16px] text-center hidden mobile:flex leading-[24px] mt-[10px] text-[#3C3E41] font-variation-customOpt16">
          {strings.ImateVprašanjePredlogeKomentarje}
        </div>
      </div>

      {/*Main Container for details */}
      <div
        className="px-[113px] mx-auto pt-[66px] pb-[70px] mt-[51px] flex flex-col
     bg-gradient-to-r from-[#FFFFFF95] via-[#FFFFFF60] to-[#FFFFFF20] backdrop-blur rounded-2xl border-[4px] border-[#FFFFFF] shadow-lg
     mobile:px-[8px] mobile:mt-[39px] mobile:pb-[23px]
    "
      >
        {/* Container for text fields */}
        <div className="flex flex-col items-start justify-start w-[427px] mobile:max-w-[310px] mobile:w-[330px]">
          {/* First text field and title */}
          <div className="text-[#3C3E41] text-[15px] leading-[20px] font-variation-customOpt16">
            {strings.Ime}
          </div>
          <div className="h-[38px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="text"
              value={inputValueTodo}
              onChange={handleValueTodoInput}
              className="w-full px-[6px] h-full  bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Second text field and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.Epošta}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="email"
              value={inputValueEmail}
              onChange={handleEmailInput}
              className="w-full px-[6px] h-full bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Third Dropdown and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.Zadeva}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="text"
              value={inputValueMatter}
              onChange={handleValueMatterInput}
              className="w-full px-[6px] h-full  bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Fourth text field and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[84px] leading-[20px] font-variation-customOpt16">
            {strings.Sporočilo}
          </div>
          <div className="h-[164px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">

            <textarea
              value={inputValueMessage}
              onChange={handleValueMessageInput}
              className="w-full h-full px-[6px] pt-[6px] bg-transparent focus:outline-none text-[#848484] resize-none"
            />
          </div>

          {/*Button Container*/}
          <div className={`h-[48px] mt-[52px] px-[98.85px] cursor-pointer py-[13px] mx-auto rounded-lg shadow-custom-light-dark-with-white ${loading ? '!bg-[grey]' : 'bg-gradient-to-b from-[#0D94E8] to-[#1860A3]'}`}
            onClick={() => {
              !loading && handleSubmit()
            }}>
            <span
              className="flex items-center justify-center text-[20px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF]"
            >
              {strings.Pošlji}
            </span>
          </div>

          {/*Bottom text*/}
          <div className="text-[14px] self-center mt-5 leading-[24px] font-variation-customOpt14 text-[#6D778E]">
            {strings.ObičajnoOdgovorimoVNekajUrah}
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactFormPage;
