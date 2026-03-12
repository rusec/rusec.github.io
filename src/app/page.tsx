import Image from "next/image";
import EboardCard from "./components/EboardCard";
import { getMotd } from "./api/info/getMotd";
export const dynamic = "auto";

export default async function Home() {
  let info = await getMotd();
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center bg-base-100">
      <div className="z-10 w-full min-h-screen items-center justify-center font-mono text-sm lg:flex relative">
        <Image
          src={"/starry_night_big.png"}
          alt="RUSEC Logo"
          className="bg-black opacity-30"
          priority
          fill
          style={{ objectFit: "contain" }}
        />
        <div className="w-full justify-center items-center flex flex-col z-20">
          <div className="w-fit justify-center items-center flex flex-col p-10 rounded-md text-secondary-content">
            <div className="font-bold text-6xl">RU Cybersecurity Club</div>
            <div className="font-thin text-2xl">At Rutgers University</div>
            <div className="font-thin text-sm pt-2">{info?.motd}</div>
          </div>
        </div>
      </div>
      <div className="p-8 font-bold text-4xl text-secondary-content">
        Eboard
      </div>
      <div className="divider"></div>
      <div className="flex gap-10 p-14 flex-wrap">
        <EboardCard
          name={"Rhea Sharma"}
          title="President & Instructor"
          description="Hi I'm Rhea, I'm a senior majoring in Computer Science and minoring in Critical Intelligence Studies and apart of the Douglass Residential College.
                            Currently I’m the club’s president responsible for the administration and logistics of the club. 
                            I'm interested in Web Security, Application Security, and Forensics. I typically spend my spare time skateboarding around campus."
          imgurl="/eboard/rhea_eboard_photo.jpg"
          imgWidth={1000}
          socials={[
            {
              url: "https://www.linkedin.com/in/rheasharma-cs/",
              type: "linkedin",
            },
            {
              type: "github",
              url: "https://github.com/rhea80",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Ryan Petit"}
          title="Vice President & Instructor"
          description="Hi guys my name is Ryan Petit, I am currently a Junior and Computer Science major here at Rutgers University, specifically concentrating in Cybersecurity. Some of my favorite interests in Cybersecurity are Threat Intelligence, Forensics, SOC analysis. When I'm not focusing on my studies I usually spend my free time being an amateur bodybuilder, tinkering with tech, and playing video games. I have been apart of the club for about a year learning lots about the specifics of cybersecurity, especially through my help within competitions like CCDC, and ISTS 2025. I look forward to meeting new people as well as getting the opportunity to let my skills grow throughout my time here in the club."
          imgurl="/eboard/ryan_eboard_photo.jpg"
          socials={[
            {
              url: "https://www.linkedin.com/in/ryan-petit-437762305",
              type: "linkedin",
            },
          ]}
          left={false}
        />

        <EboardCard
          name={"Brandon Schwartz"}
          title="Treasurer"
          description="Hi my name is Brandon Schwartz and I am majoring in Information Technology and Informatics with a minor in Critical Intelligence Studies. My favorite area to explore in cybersecurity currently is cyber forensics. I like videography (as that is my current job) and I like to go to the gym and play video games"
          imgurl="/eboard/brandon_eboard_photo.png"
          imgWidth={300}
          socials={[
            {
              url: "https://www.instagram.com/brandon__schwartz",
              type: "instagram",
            },
          ]}
          left={false}
        />
        <EboardCard
          name={"Maria"}
          title="Secretary"
          description="Hey, I'm Maria, and I'm the secretary for RUSec! I'm majoring in Computer Science with minors in Critical Intelligence Studies and Chinese. My interests include threat intelligence and GRC. I also love to read and am currently learning how to rebind books!"
          imgurl="/eboard/maria_eboard_photo.jpg"
          imgWidth={500}
          socials={[
            {
              type: "linkedin",
              url: "https://www.linkedin.com/in/maria-a-vaikath/",
            },
          ]}
          left={false}
        />
        <EboardCard
          name={"Amelia"}
          title="Competition Coordinator & Instructor"
          description="My name is Amelia and I am a rutgers computer science student who studies at rutgers and is your regular average human being. I am not involved in any mafia organizations, as stated by me and my lawyer, and my hobbies include regular human activities like drinking water and eating food (I am not a skinwalker), flight simulators, cybersecurity like the popular tv show Dr. Robot, writing, and more. I am not employed but have fortunately been able to pass a background check. "
          imgurl="/eboard/mel_eboard_photo.png"
          imgWidth={1000000000}
          socials={[
            {
              type: "github",
              url: "https://www.github.com/AmeliaYeah",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Omar Battat"}
          title="Research Head"
          description="My name is Omar Battat and I am the current Editor at RUSEC. I am a junior majoring in Information Technology and
                    Informatics with a minor in Critical Intelligence. My interests in Cybersecurity are Reverse Engineering, Malware
                    Analysis, and General Blue teaming. The thing I enjoy the most about Cybersecurity is ability to keep technology and, more
                    importantly, people safe while solving complex problems and issues in an evolving digital world. Outside of cybersecurity
                    my hobbies include Language Learning, playing soccer, and reading. I enjoy language learning the most as similar to
                    Reverse Engineering, it’s all about solving a sophisticated puzzle and being able to translate it into something
                    comprehensible. Something I wish to accomplish in the field is to raise awareness on the lack of security hardening in
                    medical institutions and how they can better defend themselves against ransomware attacks."
          imgurl="/eboard/omar_eboard_photo.jpg"
          imgWidth={10000}
          imgHeight={10000}
          socials={[
            {
              url: "https://www.linkedin.com",
              type: "linkedin",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Rich Cosden"}
          title="System Administrator"
          description="Hi I'm Rich. I'm a Junior majoring in Information Technology & Informatics and minoring in Critical Intelligence Studies. I'm one of our clubs system administrators, if you are currently reading this site we probably did something good. My main interests in cyber are network security, security engineering and threat intelligence. In my free time i'm usually playing videogames, exploring music, playing pool and being a snob about coffee "
          imgurl="/eboard/rich_eboard_photo.jpg"
          imgWidth={1000000000}
          socials={[
            {
              type: "linkedin",
              url: "https://www.linkedin.com/in/rich-c-19584b339/",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Georgi Petrov"}
          title="System Administrator"
          description="idk description"
          imgurl="/eboard/georgi_eboard_photo.jpg"
          imgWidth={200}
          socials={[
            {
              type: "linktree",
              url: "https://georgi.thepetrovs.com/links/",
            },
          ]}
          left={false}
        />
                
      </div>
      <pre className="hidden">
        {`int getRandom(){
                    return 4;
                }`}
      </pre>
    </main>
  );
}
