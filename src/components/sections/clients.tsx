"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  const clients = [
    {
      name: "Pigment AB",
      image: "/client1.png",
    },
    {
      name: "House of Legends",
      image: "/client2.png",
    },
    {
      name: "Arkoevent",
      image: "/client3.png",
    },
    {
      name: "Yazamo",
      image: "/client4.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto flex flex-wrap items-center justify-center">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full max-w-72 sm:max-w-none sm:w-1/2 md:w-1/4 aspect-square p-4"
          >
            <div className="bg-muted-foreground/10 w-full h-full flex items-center justify-center">
              <span className="text-4xl text-center p-4 font-normal text-muted-foreground">
                {client.name}
              </span>
              {/* <Image src={client.image} alt={client.name} width={100} height={100} /> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
