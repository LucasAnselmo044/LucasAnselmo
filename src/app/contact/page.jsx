"use client";

import { useState } from "react"; // 👈 1. Import useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"; // Icons not directly used in the form, but kept.
import { motion } from "framer-motion";

// Contact information (kept, though not directly used in the form submission function)
const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lucasanselmodev@gmail.com",
  },
  // ... other contacts if any
];

const Contact = () => {
  // 👇 2. Create states for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const whatsappPhoneNumber = "5581983406667"; // Your WhatsApp number

  // 👇 4. Create the adapted Send Function
  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Assemble the message with form data
    // You can customize this message as you prefer
    const textContent = `Hello! My name is ${firstName} ${lastName}.
    \nEmail: ${email}
    ${phone ? `\nPhone: ${phone}` : ""}
    ${service ? `\nService of interest: ${service}` : ""}
    \n\nMessage: ${message}`;

    const formattedMsg = encodeURIComponent(textContent);
    const url = `https://wa.me/${whatsappPhoneNumber}/?text=${formattedMsg}`;

    console.log("Generated URL:", url); // For debugging
    window.open(url, "_blank"); // Opens WhatsApp in a new tab

    // Optional: Clear fields after sending
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            {" "}
            <form
              className="flex flex-col gap-6 p-10 bg-[#0c142c] rounded-xl"
              onSubmit={handleSendMessage}
            >
              <h3 className="text-4xl text-blue-500">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Get in touch to discuss your project!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Select
                onValueChange={(value) => setService(value)}
                value={service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Software/Web Development">
                      Software/Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0c142c] text-blue-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              ======
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0c142c] text-blue-500 rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Phone</p>
                  <h3 className="text-xl">{whatsappPhoneNumber}</h3>{" "}
                </div>
              </li>
              {/* Location example
                <li className='flex items-center gap-6'>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0c142c] text-blue-500 rounded-md flex items-center justify-center">
                    <div className="text-[28px]"><FaMapMarkedAlt /></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">Location</p>
                    <h3 className="text-xl">Your City, Your State</h3>
                  </div>
                </li>
                */}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
