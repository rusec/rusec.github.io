import React from "react";
import EboardCard from "../components/EboardCard";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="bg-base-100 text-primary-content p-4 min-h-screen">
      <div className="p-7 bg-base-200 text-secondary-content rounded-md shadow-md">
        <h1 className="font-extrabold text-5xl pb-2">About Us</h1>
        <div className="p-2">
          <p className="pb-2">
            At RUSEC, we are a collective of passionate individuals dedicated to
            securing the digital world and fostering a thriving security
            community at Rutgers University. Our mission is to build and
            strengthen RUSEC through collaboration, innovation, and continuous
            learning.{" "}
          </p>
          <p className="pb-2">
            Each member of RUSEC contributes a vital piece to the puzzle, making
            our organization dynamic and effective. We provide a platform for
            students to showcase and develop their skills, whether they&apos;re
            interested in red team penetration testing, web development, or
            other facets of cybersecurity. RUSEC is more than just a
            club—it&apos;s a community where members can grow, learn, and excel
            in their chosen fields.
          </p>
          <p className="pb-2">
            We are committed to advancing security at Rutgers University by
            offering up-to-date workshops that cover a wide range of topics,
            from hardware security to social engineering. These workshops are
            designed to keep our members at the cutting edge of the field,
            ensuring they are well-prepared to tackle the challenges of today
            and tomorrow.
          </p>
          <p className="pb-2">
            Not only do we strive to learn through various workshops, but we put
            our knowledge to the test in a variety of vigorous security
            competitions. From standardized collegiate tournaments such as CCDC
            and CPTC, to monthly CTFs, we have hands on challenges for all skill
            levels. We pride ourselves in representing Rutgers on a national
            stage and strive to cultivate a competitive and collaborative
            culture that can level up both our skills and rank among
            universities nation wide.
          </p>
          <p className="pb-2">
            At RUSEC, we believe that security is a collective effort, and there
            is no place more secure, supportive, and empowering than within our
            community.
          </p>
        </div>
        <div className="divider"></div>
        <div className="">
          <h2 className="font-extrabold text-5xl pb-4">Former Board Members</h2>
          <div className="divider-end"></div>
          <div className="flex flex-col gap-4">
            <EboardCard
              name="Elizabeth Laub"
              title="2023 President"
              description="Hi, I’m Liz, I’m the President and the CCDC Team Captain. I am a senior studying computer science. I enjoy research and learning more about security architecture. I also have a lovely cat named Scott =(^.w.^)="
              imgurl="/eboard/2023/liz_eboard_photo.png"
              socials={[
                {
                  url: "https://www.linkedin.com/in/elizabeth-l-laub",
                  type: "linkedin",
                },
              ]}
              left={true}
            />
            <EboardCard
              name="Rajat Patel"
              title="2023 Vice President and Instructor"
              description="Hi, I’m Rajat Patel and I’m a vice president and an instructor for the RU Security Club! I’m a senior studying computer science and math, and I enjoy cybersecurity a lot. In particular, I’m especially interested in cryptography and reverse engineering. Hope to see you there!"
              imgurl="/eboard/2023/rajat_eboard_photo.png"
              socials={[
                {
                  url: "https://www.linkedin.com/in/rajat-patel-18915b1a4/",
                  type: "linkedin",
                },
                {
                  url: "https://github.com/PAndaContron/",
                  type: "github",
                },
              ]}
              left={false}
            />
            <EboardCard
              name="Jay Patel"
              title="2023 Secretary"
              description="My name is Jay Patel and I’m currently a senior at Rutgers. I am an Information Technology & Informatics major with a minor in Critical Intelligence Studies. I’m currently following the Cybersecurity ITI-guided pathway and I plan to pursue a career in Cybersecurity. My interests within the field lie in data privacy and security, as well as penetration testing. In my free time, I engage in game development and coding."
              imgurl="/eboard/2023/jay_eboard_photo.jpg"
              socials={[
                {
                  url: "https://www.linkedin.com/in/jayp424",
                  type: "linkedin",
                },
              ]}
              left={true}
            />
            <EboardCard
              name="Adam Paulina"
              title="2023 Webmaster and Instructor"
              description="Hi, I’m Adam Paulina and I’m the webmaster of RUSEC! I’m a senior majoring in computer science, and I’m very interested in reverse engineering and vulnerability discovery. I plan to go into a career in cybersecurity. In the club, other than running the website, I teach some of the weekly workshops."
              imgurl="/eboard/2023/adam_eboard_photo.jpg"
              socials={[
                {
                  url: "https://www.linkedin.com/in/adam-paulina",
                  type: "linkedin",
                },
              ]}
              left={false}
            />
            <EboardCard
              name={"David Feldman"}
              title="2024 President & Instructor"
              description=" Hi, I’m David, I’m a senior majoring computer science and minoring in critical intelligence studies and political science.
                                Currently I’m the club’s president responsible for the administration and logistics of the club. I’m interested in cyber
                                threat intelligence, security operations, and security policy. I typically spend my free time on learning foreign
                                languages and sports."
              imgurl="/eboard/david_eboard_photo.jpg"
              imgWidth={1000}
              socials={[
                {
                  url: "https://www.linkedin.com/in/david-i-feldman/",
                  type: "linkedin",
                },
              ]}
              left={true}
            />
        <EboardCard
          name={"Mohamad Khawam"}
          title="2024 Vice President & Instructor"
          description="Hey I’m mo, I specialize is web security and web development. I do everything in node js because it makes life easier"
          imgurl="/eboard/mohamad_eboard_photo.jpg"
          socials={[
            {
              url: "https://www.linkedin.com/in/mohamad-k",
              type: "linkedin",
            },
            {
              url: "https://www.github.com/dominusmars",
              type: "github",
            },
          ]}
          left={false}
        />
            <EboardCard
              name={"Matt Bixby"}
              title="2024 Treasurer"
              description="Hi, my name is Matthew Bixby, and I am the RU Security Treasurer. I am a Junior majoring in Computer Science, minoring in
                                            Psychology and Critical Intelligence Studies. I am interested in penetration testing and reverse engineering, which I
                                            enjoy learning on TryHackMe and HackTheBox. Some of my hobbies include playing soccer, skiing, and watching movies."
              imgurl="/eboard/2024/matt_bixby_eboard_photo.jpg"
              imgWidth={500}
              socials={[
                {
                  url: "https://www.linkedin.com",
                  type: "linkedin",
                },
              ]}
              left={true}
            />
             <EboardCard
          name={"Rahulraj Rajesh"}
          title="2024 Event Coordinator"
          description="I’m Rahulraj Rajesh and I’m a junior majoring in Computer Science and minoring in Cognitive Science. I love programming,
                    learning about cybersecurity, flying drones, and playing video games! My expertise in cybersecurity is on networking and
                    security hardening."
          imgurl="/eboard/rahulraj_eboard_photo.jpg"
          socials={[
            {
              url: "https://www.linkedin.com",
              type: "linkedin",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Keeret Saggu"}
          title="2024 Webmaster & Instructor"
          description="Idk description"
          imgurl="/eboard/keeret_eboard_photo.png"
          imgWidth={200}
          socials={[
            {
              url: "https://www.linkedin.com",
              type: "linkedin",
            },
          ]}
          left={false}
        />
        <EboardCard
          name={"Harsh Godhani"}
          title="2024 Secretary & Instructor"
          description="Hey, I’m Harsh Godhani and I’m the Marketing Director. I’m a junior BAIT major minoring in Creative Writing and Critical Intelligence Studies. I enjoy exploring threat intelligence, risk management, compliance, and general IT security. On my free time I run a Fantasy Football advice/streaming channel, binge Tv shows, write poetry & short stories, and eating out with friends. Feel free to reach out to me on discord or IG with Tv show and restaurant recommendations!!"
          imgurl="/eboard/harsh_eboard_photo.jpg"
          imgWidth={600}
          socials={[
            {
              url: "https://www.linkedin.com",
              type: "linkedin",
            },
          ]}
          left={true}
        />
        <EboardCard
          name={"Harris Ransom"}
          title="2024 Head Instructor"
          description="Hi! I’m Harris Ransom and I’m an instructor for the Rutgers Security Club. I’m a sophomore Electrical and Computer
                    Engineering student with a particular interest in hardware and systems security. Within RUSec, I also compete in CTF
                    challenges and the Mid-Atlantic CCDC competition. I look forward to getting to know you and helping you develop your
                    cybersecurity knowledge and skills!"
          imgurl="/eboard/harris_eboard_photo.jpg"
          imgWidth={10000}
          socials={[
            {
              url: "https://www.linkedin.com/in/harris-ransom/",
              type: "linkedin",
            },
            {
              url: "https://github.com/hransom528",
              type: "github",
            },
          ]}
          left={false}
        />
        <EboardCard
          name={"Serge Kuznetsov"}
          title="2024 Graphic Design"
          description="Hi, I’m Serge and I’m the graphic designer for RUSec. I’m a sophomore computer science major with minors in music and
                    critical intelligence, and I’m really into cryptography and reverse engineering. In my free time I enjoy vinyl collecting
                    and puzzle solving!"
          imgurl="/eboard/serge_eboard_photo.png"
          imgWidth={300}
          socials={[
            {
              url: "https://www.linkedin.com",
              type: "linkedin",
            },
          ]}
          left={false}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
