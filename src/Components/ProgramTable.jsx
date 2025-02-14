
import { GraduationCap } from "lucide-react";


const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: 7000,
    refereeBonus: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: 9000,
    refereeBonus: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
];

const ProgramTable = () => {
  return (
    <div className= "overflow-x-auto rounded-xl bg-white shadow-md ">
      <table className="w-full border-collapse bg-tgrey">
        <thead >
          <tr className="bg-tblue ">
            <th className="pl-7 py-2 text-left text-lg font-bold text-dblue">Programs</th>
            <th className="p-2  text-left text-lg font-bold text-dblue border-x border-gray-100">Referrer Bonus</th>
            <th className="p-2 text-left text-lg font-bold text-dblue">Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-tgrey "
            >
              <td className="p-2">
                
                <div className="flex items-start gap-3 w-[70%]">
                
                  <div className=" rounded-lg bg-blue-100 ml-4 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-dblue" />
                  </div>

                  <span className="text-md font-light text-gray-700 break-words whitespace-normal">{program.name}</span>
                </div>
               
              </td>
              <td className="p-2 text-center border-x border-gray-100">
                <span className="text-md font-light text-gray-700">₹ {program.referrerBonus}</span>
              </td>
              <td className="p-2 text-center">
                <span className="text-md font-light text-gray-700">₹ {program.refereeBonus}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramTable;