import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl pt-20 text-center font-extralight bg-gradient-to-r from-neutral-400 to-slate-500 bg-clip-text text-transparent pb-2"
      >
        Projects
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center py-4 font-thin"
      >
        Here are some of my biggest Projects so far
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 100, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap my-12 justify-center content-around items-center gap-12 w-full"
      >
        <button className="text-2xl font-extralight bg-transparent py-4 px-8 w-full lg:w-1/4 rounded-full border-2 border-neutral-400 hover:text-purple-500 hover:border-purple-700 hover:shadow-2xl shadow-purple-700 transition-all duration-700 ">
          <a
            href="http://vinoventure-frontend.s3-website.eu-north-1.amazonaws.com/"
            target="_blank"
          >
            VinoVenture
          </a>
        </button>
        <button className="text-2xl font-extralight bg-transparent py-4 px-8 w-full lg:w-1/4 rounded-full border-2 border-neutral-400 hover:text-purple-500 hover:border-purple-700 hover:shadow-2xl shadow-purple-700 transition-all duration-700">
          <a href="https://balldertechnik-hl.at/" target="_blank">
            HTL Ball 2024
          </a>
        </button>
      </motion.div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-extralight bg-gradient-to-r from-neutral-400 to-slate-500 bg-clip-text text-transparent pb-2 pt-8"
      >
        Upcoming projects
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center py-4 font-thin"
      >
        Here are some projects that I'm currently working on or will be started
        soon
      </motion.p>
      <div className="flex flex-wrap mt-4 my-12 justify-center gap-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="max-w-sm w-full lg:w-1/4 lg:flex"
        >
          <div className=" border-2 border-neutral-400 lg:border-gray-400 rounded-2xl p-4 flex flex-col justify-between leading-normal">
            <div className="mb-2">
              <div className="text-xl mb-2">Website for FF-Stranzendorf</div>
              <p className="0 text-base font-extralight">
                Currently I'm working on a new modern webpage for the fire
                department Stranzendorf. The old version is outdated and needs a
                refresh.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-sm w-full lg:w-1/4 lg:flex"
        >
          <div className=" border-2 border-neutral-400 lg:border-gray-400 rounded-2xl p-4 flex flex-col justify-between leading-normal">
            <div className="mb-2">
              <div className="text-xl mb-2">Update for Brandmalerei Schup</div>
              <p className="0 text-base font-extralight">
                The Website was my first bigger project. I want to update the
                site in near future to make it more modern and user friendly.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm w-full lg:w-1/4 lg:flex"
        >
          <div className=" border-2 border-neutral-400 lg:border-gray-400 rounded-2xl p-4 flex flex-col justify-between leading-normal">
            <div className="mb-2">
              <div className="text-xl mb-2">Portfolio for my DJ Career</div>
              <p className="0 text-base font-extralight">
                After a few years of DJing I want to create a portfolio for my
                DJ Career.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
