import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import dragon from '../Assets/dragon.svg';
interface TeamMember {
  name: string;
  role: string;
  company: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Jake Weary",
    role: "Lead Designer",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Sadie Berlin",
    role: "UI Designer",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Dylan",
    role: "Full Stack",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Amaya ",
    role: "UI Designer",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Sam Smith",
    role: "UX Designer",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Cecilia Evans",
    role: "UI Designer",
    company: "Flowbase",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
];

export default function StarcTeam() {
  return (
    <section className="bg-white py-16 px-6 pr-40">
      <div className="max w-6xl mx-auto text-center mb-12">
        <p className="text-purple-600 pr-[63%] text-sm font-mont font-semibold">Our Team</p>
        <h2 className="text-3xl md:text-4xl pr-[54%] font-mont font-medium mt-2">Starc, Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-60 pr-40">

        {teamMembers.map((member, idx) => (
          // <div
          //   key={idx}
          //   className="
          //   bg-purple-800
          //    rounded-[4%] p-1 relative overflow-hidden"

          // >
          //   <img src={dragon} className="pl-10 w-full h-50 " />
          //   <div className="absolute rounded-xl">

          //   </div>
          //   <div className="relative z-9">
          //     <h3 className="text-lg font-mont font-medium">{member.name}</h3>
          //     <p className="text-sm font-mont text-gray-600 mt-1">
          //       {member.role},{" "}
          //       <a href="#" className="text-purple-600 underline">
          //         {member.company}
          //       </a>
          //     </p>
          //     <div className="flex p-3 gap-4 mt-4 text-purple-600">
          //       {member.socials.facebook && (
          //         <a href={member.socials.facebook} aria-label="Facebook">
          //           <FaFacebookF />
          //         </a>
          //       )}
          //       {member.socials.instagram && (
          //         <a href={member.socials.instagram} aria-label="Instagram">
          //           <FaInstagram />
          //         </a>
          //       )}
          //       {member.socials.dribbble && (
          //         <a href={member.socials.dribbble} aria-label="Dribbble">
          //           <FaDribbble />
          //         </a>
          //       )}
          //       {member.socials.twitter && (
          //         <a href={member.socials.twitter} aria-label="Twitter">
          //           <FaTwitter />
          //         </a>
          //       )}
          //     </div>
          //   </div>
          // </div>


          <div
            key={idx}
            className="
           
        bg-white
        rounded-md
        p-1
        relative
        overflow-hidden
        shadow-sm
      w-full h-[20vh]

      "
          >

            <div className=" grid grid-cols-2 w-full h-[100%] rounded-md bg-[#F7F8FA]">
              <div className="relative z-10">
                <h3 className="text-xl  text-gray-900 font-mont space-y-3">
                  {member.name}
                </h3>
                <p className="text-sm font-mont text-gray-500 mt-1">
                  {member.role},{''}
                  <a href="#" className="text-purple-500 hover:underline">
                    {member.company}
                  </a>
                </p>
                <div className="flex gap-3 mt-4">
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      aria-label="Facebook"
                      className="p-2 bg-gray-100 rounded-full text-purple-600 hover:bg-gray-200 transition"
                    >
                      <FaFacebookF size={16} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      aria-label="Instagram"
                      className="p-2 bg-gray-100 rounded-full text-purple-600 hover:bg-gray-200 transition"
                    >
                      <FaInstagram size={16} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      aria-label="Twitter"
                      className="p-2 bg-gray-100 rounded-full text-purple-600 hover:bg-gray-200 transition"
                    >
                      <FaTwitter size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                {/* Optional image placeholder - not visible in the provided image */}
                <img src={dragon} className="pl-10 w-full h-50" />
              </div>

            </div>
          </div>



        ))}
      </div>
    </section>
  );
}
