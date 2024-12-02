'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'lucasanselmodev@gmail.com'
  },

]

import { motion } from "framer-motion"

const Contact = () => {
  return <motion.section initial={{opacity: 0}} 
  animate={{opacity: 1}} transition={{delay: 2.4, duration: 0.4, ease:'easeIn'}}
  className='py-6'
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#0c142c] rounded-xl">
            <h3 className="text-4xl text-blue-500">Let's work together</h3>
            <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam beatae dignissimos commodi veritatis!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname" />
              <Input type="lastname" placeholder="Lastname" />
              <Input type="email" placeholder="Email" />
              <Input type="phone" placeholder="Phone" />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Software/Web Development</SelectItem>
                  <SelectItem value="cst">UI/UX Design</SelectItem>
                  <SelectItem value="mst">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="Type your message here." />
            <Button size="md" className="max-w-40">Send message</Button>
          </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">

          </div>
      </div>
    </div>
  </motion.section>
}

export default Contact